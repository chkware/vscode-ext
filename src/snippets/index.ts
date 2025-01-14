import * as fetch from "./fetch";
import * as validate from "./validate";

export interface SnippetItem {
  label: string;
  description: string;
  snippet: string;
}

export const fetchSnippets = [
  fetch.fetchMinimalRequest,
  fetch.fetchGETWithURLParams,
  fetch.fetchPOSTWithAuthBearer,
  fetch.fetchPOSTWithFormSubmit,
  fetch.fetchPOSTWithJSONBody,
  fetch.fetchPUTWithFileUpload,
];

export const validateSnippets = [
  validate.validationMinimal,
  validate.validationWithData,
  validate.validationWithDataAndVars,
];
