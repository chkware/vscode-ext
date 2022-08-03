import { ExampleItem } from '.';

export default <ExampleItem>{
  label: 'Minimal request',
  description: '',
  snippet: `
    ---
    request:
    url: https://example.org/api/path
    method: GET
    `,
};
