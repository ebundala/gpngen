'use strict'

const autocannon = require('autocannon')

const findCategories = `query findManyServiceCategory{
  findManyServiceCategory{
      status
      message
      data{
      id
     name

      }
    }
  }`;

//curl 'http://localhost:3000/graphql' - H 'Accept-Encoding: gzip, deflate, br' - H 'Content-Type: application/json' - H 'Accept: application/json' - H 'Connection: keep-alive' - H 'DNT: 1' - H 'Origin: file://' - H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9mYXctaWRlbnRpZmljYXRpb24iLCJuYW1lIjoiRnJhbmsgZG9lIiwicm9sZSI6IlVTRVIiLCJhdWQiOiJmYXctaWRlbnRpZmljYXRpb24iLCJhdXRoX3RpbWUiOjE2MDg2NDI0NzcsInVzZXJfaWQiOiIyQk82ZHRLUjNGaGtCZE9rdjdidXlBVDQxekcyIiwic3ViIjoiMkJPNmR0S1IzRmhrQmRPa3Y3YnV5QVQ0MXpHMiIsImlhdCI6MTYwODY0MjQ5MSwiZXhwIjoxNjA5MDc0NDkxLCJlbWFpbCI6ImZyYW5rQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImZyYW5rQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.kLrgOJsxH61Tc7cOnWUg4kED4i9iHt5lXMzkzj9fNZ1pjMN8i38ysnu9sGgE4xFwhCTbYjF0LnagYaYUjEj9QEieNB1LX9ZCDR4hJ1RZXZjAtVOYPK6Xkyklk85-BUr6CEalSRYYARvODcaee2K-NphorEFyz0k_pofqv5evJPvedoWF_g8GfT2ZzsBcg969RmzaYjdX6Dg6AsvSOLLrT0a2xEp_NyKhD1Tkt0EXv2MedLSdJFh9KfnSAPELreG30ddJ11BBCJq9YM_GSRvmPqz4OjI3uSQRuqfWEXVMSe1vTxNMLlP923tOTHexZ_VdGDryrg8cG3VrJxWIb-JhOQ' --data - binary '{"query":"query findFirstTenant{\n  findFirstTenant(where:{\n    \n    name:{\n      mode: insensitive,\n      contains:\"tenAnt\"}}){\n    id\n   name\n    url\n  }\n}\n\nmutation createTenant{\n  createOneTenant(data:{\n    name:\"Tenant6\",\n    url:\"postgresql://rootDev:root@pgbouncer:6432/development?schema=public&connection_limit=1&pgbouncer=true\"\n  }){\n    id\n    name\n    url\n  }\n}"}' --compressed
const serverUrl = "http://localhost:3000/graphql"
const body = (d) => ({ query: d });
autocannon({
  url: serverUrl,

  connections: 100, //default
  pipelining: 1, // default
  duration: 60, // default
  body: JSON.stringify(body(findCategories)),
  method: 'POST',
  // connectionRate:100
  //overallRate: 1000,
  headers: {
    "content-type": 'application/json',
    'accept': 'application/json'
  }
}, console.log)

// async/await
/*async function foo() {
    const result = await autocannon({
        url: 'http://localhost:3000',
        connections: 10, //default
        pipelining: 1, // default
        duration: 10 // default
    })
    console.log(result)
}*/
