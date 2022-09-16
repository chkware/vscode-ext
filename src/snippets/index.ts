import minimalRequest from "./minimal-request";
import {
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
  httpPOSTWithFormSubmit,
  httpPOSTWithJSONBody,
  httpPUTWithFileUpload,
} from "./http";

console.log(httpGETWithURLParams);
export interface ExampleItem {
  label: string;
  description: string;
  snippet: string;
}

export default [
  minimalRequest,
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
  httpPOSTWithFormSubmit,
  httpPOSTWithJSONBody,
  httpPUTWithFileUpload,
];
