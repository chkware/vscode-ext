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
