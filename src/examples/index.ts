import minimalRequest from './minimal-request';
import httpGETWithURLParams from './http-get-with-query-string';

export interface ExampleItem {
  label: string;
  description: string;
  snippet: string;
}

export default [minimalRequest, httpGETWithURLParams];
