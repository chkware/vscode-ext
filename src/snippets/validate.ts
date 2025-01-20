import { SnippetItem } from ".";

export const validateMinimal = <SnippetItem>{
  label: "validate: Minimal validate spec",
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

export const validateWithData = <SnippetItem>{
  label: "validate: Validate spec with setting data",
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

export const validateWithDataAndVars = <SnippetItem>{
  label: "validate: Validate spec with setting data and variables",
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
