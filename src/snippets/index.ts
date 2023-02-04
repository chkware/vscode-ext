import {
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
  httpPOSTWithFormSubmit,
  httpPOSTWithJSONBody,
  httpPUTWithFileUpload,
  minimalRequest,
} from "./http";

export interface SnippetItem {
  label: string;
  description: string;
  snippet: string;
}

export const httpSnippets = [
  minimalRequest,
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
  httpPOSTWithFormSubmit,
  httpPOSTWithJSONBody,
  httpPUTWithFileUpload,
];
