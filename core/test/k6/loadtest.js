
import { check, group, sleep } from 'k6';
import http from 'k6/http';
export let options = {
  vus: 40,
  duration: '200s',
};
const firstTenant = `query findFirstTenant{
        findFirstTenant(where:{
          name:{
            mode: insensitive,
            contains:"tenAnt"}
            }
        ){
          id
         name
          url
        }
      }`;
const createTenant = `
mutation createTenant{
    createOneTenant(data:{
      name:"TenantName",
      url:"postgresql://rootDev:root@pgbouncer:6432/development?schema=public&connection_limit=1&pgbouncer=true"
    }){
      id
      name
      url
    }
  }`;
const serverUrl = "http://localhost:3000/graphql"

const body = (d) => ({ query: d });

const req = (d, url) => ({
  url: url,
  method: 'POST',
  body: body(d)
})
const batchSize = 10
const batchRequests = (d, url, count) => {
  const reqs = [];
  for (let i = 0; i < count; i++) {
    reqs.push(req(d, url));
  }
  return reqs;
}
export default function () {


  //let res = http.post(serverUrl, body(firstTenant));
  //console.log(JSON.stringify(res.json()));
  // check(res, { 'status was 200': (r) => r.status == 200 });
  //check(res, { 'Return data': (r) => r.body == 200 });
  group("batch read load", () => {
    let result = http.batch(batchRequests(firstTenant, serverUrl, batchSize))
    result.forEach((res, i) => {
      check(res, { 'status was 200': (r) => r.status == 200 })
    })

  })
  sleep(1);
}
