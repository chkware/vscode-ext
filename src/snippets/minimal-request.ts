import { ExampleItem } from ".";

export default <ExampleItem>{
  label: "http: Minimal request",
  description: "",
  snippet: `
---
version: default:http:0.7.2

request:
  url: https://httpbin.org/get
  method: GET
`,
};
