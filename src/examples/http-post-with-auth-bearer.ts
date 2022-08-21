import { ExampleItem } from ".";

export default <ExampleItem>{
  label: "http: POST with header and bearer token",
  description: "",
  snippet: `
---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c  
`,
};
