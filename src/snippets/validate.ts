import { SnippetItem } from ".";

export const validationMinimal = <SnippetItem>{
  label: "validation: Minimal validation spec",
  description: "",
  snippet: `---
version: default:validation:0.7.2

# pass data via chk validate with --data flag
asserts:
  - type: Int
    actual: <% _data.code %>

expose:
  - <% _asserts_response %>
`,
};

export const validationWithData = <SnippetItem>{
  label: "validation: Validation spec with setting data",
  description: "",
  snippet: `---
version: default:validation:0.7.2

data:
  code: 200

asserts:
  - type: Equal
    actual: <% _data.code %>
    expected: 200
    msg_pass: 'Response was successful'
    msg_fail: 'Response was unsuccessful'

  - type: Int
    actual: <% _data.code %>

expose:
  - <% _asserts_response %>
`,
};

export const validationWithDataAndVars = <SnippetItem>{
  label: "validation: Validation spec with setting data and variables",
  description: "",
  snippet: `---
version: default:validation:0.7.2

variables:
  code: 200

data:
  price: 200.10

asserts:
  - type: Equal
    actual: <% _data.code %>
    expected: 200
    msg_pass: 'Response was successful'
    msg_fail: 'Response was unsuccessful'

  - type: int
    actual: <% _data.code %>

  - type: Float
    actual: <% price %>
    expected: 200.10

expose:
  - <% _asserts_response %>
`,
};
