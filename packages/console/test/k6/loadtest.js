
import { check } from 'k6';
import http from 'k6/http';
export let options = {
  vus: 1,
  duration: '60s',
};
const firstTenant = (i) => `query findFirstTenant{
  findFirstTenant(where:{
    name:{
      mode: insensitive,
      contains:"TenantName${i}"}
      }
  ){
    status
    message
    data{
    id
   name
    url
    }
  }
}`;
const createTenant = (i) => `
mutation createTenant{
  createOneTenant(data:{
    name:"TenantName${i}",
    url:"postgresql://rootDev:root@localhost:5432/development?schema=public&connection_limit=1&pgbouncer=true"
  }){
    status
    message
    data{
    id
   name
    url
    }
  }
  }`;
const serverUrl = "http://localhost:3000/graphql"
const body = (d) => ({ query: d });

const req = (d, url, i) => ({
  url: url,
  method: 'POST',
  body: body(d),
  params: { headers: { 'User-Agent': 'k6', "authorization": `Bearer ${i < tenants.length ? tenants[i] : ""}` } },


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


  let res = http.post(serverUrl, body(firstTenant(6)));
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

const tenants = [

  "ckln300nx0000u0oe6gwfvtvk",
  "ckln300nw0000uloeqyyb0oqt",
  "ckln300pd0000pdld30e1wvs2",
  "ckln300p30000ojldz2yawsb3",
  "ckln300pc0000p5ldzqtzmjtv",
  "ckln300p30000o4ld3lswnsti",
  "ckln300pm0000pvld8q8iddhk",
  "ckln300po0000q5ld4a5tlpws",
  "ckln300pu0000qnldrzl1mhqo",
  "ckln300q90000rnldzolhnj8u",
  "ckln300q40000r8ldxqlua652",
  "ckln300qc0000s1ldsm1r4qhw",
  "ckln300qj0000vpoeb1c6nz5n",
  "ckln300qj0000vhoeufxuot20",
  "ckln300ql0000w4oealya6y0q",
  "ckln300qj0000uvoe0pj922in",
  "ckln300qu0000wloetgcurpsp",
  "ckln300qs0000x2oecs24396z",
  "ckln300re0000xhoev8xv1ms7",
  "ckln300rm0000y3oeruta8jxi",
  "ckln300rm0000xwoeyt8cpn83",
  "ckln300sk0000ramlgvrk4cyz",
  "ckln300sw0000rpmlvdi61eui",
  "ckln300yq0000u4n17y9xr3b8",
  "ckln300ye0000tnn1h9y80ecg",
  "ckln300yq0000uhn1q2q3vle0",
  "ckln300z10000v9n1oxrgs4x9",
  "ckln300z20000urn10yag7b6o",
  "ckln300z60000vnn1pdlv9mbm",
  "ckln3010a0000s3qz02nteckj",
  "ckln3010c0000rlqzcv3bk54g",
  "ckln3010b0000r7qziuxc0f02",
  "ckln3010m0000slml6wvlb4zr",
  "ckln3010n0000svqzfccz86of",
  "ckln3010o0000s4ml1ujjsc0d",
  "ckln3010w0000tgmlk80o1qtz",
  "ckln3010t0000taqz06flxdtw",
  "ckln3010w0000tsqzho12uhmb",
  "ckln301110000szmlpiro85zd",
  "ckln3010i0000shqzhyi05gzw",
  "ckln301160000u8qz9s0t9f3o",
  "ckln3011b0000twmls8sqm9uc",
  "ckln3011c0000uimlko4ny0a8",
  "ckln3011g0000ufqz78bmrg61",
  "ckln3011x0000wvn1g48buhsy",
  "ckln3011w0000w6n1pm4amwse",
  "ckln3013y0000v0qzg8jp98pb",
  "ckln3014x0000x4n1v3wxik3r",
  "ckln301o90000w9mlk69j8zks",
  "ckln302s50000x9ldxte1d1qp",

]