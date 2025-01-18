import { SnippetItem } from ".";

export const workflowMinimal = <SnippetItem>{
  label: "workflow: Minimal workflow spec",
  description: "",
  snippet: `---
version: default:workflow:0.8.0

name: Name your workflow

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk

  - name: Name task 2
    uses: fetch
    file: ../validate/some-other-request.chk

expose:
  - <% _steps %>
`,
};

export const workflowPassArguments = <SnippetItem>{
  label: "workflow: Set data for validate task",
  description: "",
  snippet: `---
version: default:workflow:0.8.0

name: Name your workflow

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk

  - name: Name task 2
    uses: validate
    file: ../validate/some-validate.chk
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
`,
};

export const workflowPassArgumentsAndVariables = <SnippetItem>{
  label: "workflow: Set variables and arguments (validate tasks)",
  description: "",
  snippet: `---
version: default:workflow:0.8.0

name: Name your workflow

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk
    variables:
      Var1: Some String value
      Var2: 11

  - name: Name task 2
    uses: validate
    file: ../validate/some-validate.chk
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
`,
};

export const workflowPassArgumentsAndDynVariables = <SnippetItem>{
  label: "workflow: Set variables (dynamic) and arguments (validate tasks)",
  description: "",
  snippet: `---
version: default:workflow:0.8.0

name: Name your workflow

variables:
  var1: Some String value
  var3: [1, 2, 3]

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk
    variables:
      Var1: <% var1 %>
      Var2: 11

  - name: Name task 2
    uses: validate
    file: ../validate/some-validate.chk

    variables:
      Var3: <% var3 %>
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
`,
};
