import { ExampleItem } from ".";

export default <ExampleItem>{
  label: "http: GET with query string",
  description: "",
  snippet: `
---
version: default:http:0.7.2

request:
  url: https://httpbin.org/get

  url_params:
    foo: bar
    two: 2
  method: GET
`,
};
