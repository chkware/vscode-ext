import minimalRequest from './minimal-request';
import requestWithQueryString from './request-with-query-string';

export interface ExampleItem {
  label: string;
  description: string;
  snippet: string;
}

export default [minimalRequest, requestWithQueryString];
