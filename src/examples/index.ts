import minimalRequest from "./minimal-request";
import httpGETWithURLParams from "./http-get-with-query-string";
import httpPOSTWithAuthBearer from "./http-post-with-auth-bearer";
import httpPOSTWithFormSubmit from "./http-post-form-submit";
import httpPOSTWithJSONBody from "./http-post-with-json-body";
import httpPUTWithFileUpload from "./http-put-with-file-upload";

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
