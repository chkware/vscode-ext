import minimalRequest from "./minimal-request";
import httpGETWithURLParams from "./http-get-with-query-string";
import httpPOSTWithAuthBearer from "./http-post-with-auth-bearer";

export interface ExampleItem {
  label: string;
  description: string;
  snippet: string;
}

export default [
  minimalRequest, 
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
];
