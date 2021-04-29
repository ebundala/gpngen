
import { check } from 'k6';
import http from 'k6/http';
export let options = {
  vus: 10,
  duration: '60s',
};
const findCategories = `
query findManyServiceCategory{
  findManyServiceCategory
    {
      status
      message
      data{
      id
     name

      }
    }
  }`;


const serverUrl = "http://localhost:3000/graphql"
const body = (d) => ({ query: d });

const req = (d, url, i) => ({
  url: url,
  method: 'POST',
  body: body(d),
  params: { headers: { 'User-Agent': 'k6', /*"authorization": `Bearer ${i < tenants.length ? tenants[i] : ""}`*/ } },


})
const batchSize = 100
const batchRequests = (d, url, count) => {
  const reqs = [];
  for (let i = 0; i < count; i++) {
    reqs.push(req(d(i), url, i));
  }
  return reqs;
}
export default function () {


  let res = http.post(serverUrl, body(findCategories));
  // console.log(JSON.stringify(res.json()));
  check(res, { 'status was 200': (r) => r.status === 200 });
  //check(res, { 'Return data': (r) => r.body == 200 });
  // group("batch write load", () => {
  //   let result = http.batch(batchRequests(createTenant, serverUrl, batchSize))
  //   result.forEach((res, i) => {
  //     check(res, { 'status was 200': (r) => r.status == 200 })
  //   })

  // })
  // group("batch read load", () => {
  //   let result = http.batch(batchRequests(firstTenant, serverUrl, batchSize))
  //   result.forEach((res, i) => {
  //     check(res, { 'status was 200': (r) => r.status == 200 })
  //   })

  // })
  //sleep(0.5);
}

