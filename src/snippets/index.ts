import {
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
  httpPOSTWithFormSubmit,
  httpPOSTWithJSONBody,
  httpPUTWithFileUpload,
  minimalRequest,
} from "./http";

import {
  testCaseMinWithHttp,
  testCaseWithFile,
  testCaseWithFilePassVars,
} from "./testcase";

import * as fetch from "./fetch";
import * as validate from "./validate";

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

export const testCaseSnippets = [
  testCaseMinWithHttp,
  testCaseWithFile,
  testCaseWithFilePassVars,
];

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
