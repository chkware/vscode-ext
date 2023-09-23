import {
  httpGETWithURLParams,
  httpPOSTWithAuthBearer,
  httpPOSTWithFormSubmit,
  httpPOSTWithJSONBody,
  httpPUTWithFileUpload,
  minimalRequest,
} from "./http";

import {
  fetchMinimalRequest,
  fetchGETWithURLParams,
  fetchPOSTWithAuthBearer,
  fetchPOSTWithFormSubmit,
  fetchPOSTWithJSONBody,
  fetchPUTWithFileUpload,
} from "./fetch";

import {
  testCaseMinWithHttp,
  testCaseWithFile,
  testCaseWithFilePassVars,
} from "./testcase";

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
  fetchMinimalRequest,
  fetchGETWithURLParams,
  fetchPOSTWithAuthBearer,
  fetchPOSTWithFormSubmit,
  fetchPOSTWithJSONBody,
  fetchPUTWithFileUpload,
];
