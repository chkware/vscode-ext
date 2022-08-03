import { ExampleItem } from '.';

export default <ExampleItem>{
  label: 'Request with query string',
  description: '',
  snippet: `
    ---
    # put variables as url_params entry
    request:
    url: https://example.org/api/path
    method: GET
    url_params:
        foo: bar
        two: 2
    `,
};
