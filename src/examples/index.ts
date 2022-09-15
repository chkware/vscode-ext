import minimalRequest from "./minimal-request";
import { httpGETWithURLParams } from "./examples";
import { httpPOSTWithAuthBearer } from "./examples";
import { httpPOSTWithFormSubmit } from "./examples";
import { httpPOSTWithJSONBody } from "./examples";
import { httpPUTWithFileUpload } from "./examples";

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
