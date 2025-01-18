import { SnippetItem } from ".";

export const validationMinimal = <SnippetItem>{
  label: "validate: Minimal validation spec",
  description: "",
  snippet: `---
version: default:validate:0.7.2

asserts:
  - type: Integer
    actual: <% _data.code %>

expose:
  - <% _asserts_response %>
`,
};

export const validationWithData = <SnippetItem>{
  label: "validate: Validation spec with setting data",
  description: "",
  snippet: `---
version: default:validate:0.7.2

data:
  code: "200"

asserts:
  - type: Equal
    actual: <% _data.code %>
    expected: 200
    msg_pass: 'Response was successful'
    msg_fail: 'Response was unsuccessful'
    cast_actual_to: int

  - type: Integer
    actual: <% _data.code | int %>

expose:
  - <% _asserts_response %>
`,
};

export const validationWithDataAndVars = <SnippetItem>{
  label: "validate: Validation spec with setting data and variables",
  description: "",
  snippet: `---
version: default:validate:0.7.2

variables:
  code: 200

data:
  price: 200.10

asserts:
  - type: Equal
    actual: <% code %>
    expected: 200
    msg_pass: 'Response was successful'
    msg_fail: 'Response was unsuccessful'

  - type: Integer
    actual: <% code %>

  - type: Float
    actual: <% price %>
    expected: 200.10

expose:
  - <% _asserts_response %>
`,
};
