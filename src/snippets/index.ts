import * as fetch from "./fetch";
import * as validate from "./validate";
import * as workflow from "./workflow";

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
  validate.validateMinimal,
  validate.validateWithData,
  validate.validateWithDataAndVars,
];

export const workflowSnippets = [
  workflow.workflowMinimal,
  workflow.workflowPassArguments,
  workflow.workflowPassArgumentsAndVariables,
  workflow.workflowPassArgumentsAndDynVariables,
];
