import { ExampleItem } from '.';

export default <ExampleItem>{
  label: 'Minimal request',
  description: '',
  snippet: `
---
version: default:http:0.7.2

request:
  url: https://example.org/api/path
  method: GET
`,
};
