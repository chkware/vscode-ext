import { SnippetItem } from ".";

export const testCaseMinWithHttp = <SnippetItem>{
  label: "testcase: minimal with http request",
  description: "",
  snippet: `---
version: default:testcase:0.7.2

request:
  url: https://xkcd.com/info.0.json
  method: GET

spec:
  asserts:
    - {type: AssertEqual, actual: $_response.code, expected: 200}
`,
};

export const testCaseWithFile = <SnippetItem>{
  label: "testcase: With file",
  description: "",
  snippet: `---
version: default:testcase:0.7.2

spec:
  execute:
    file: ./file-name.chk
  asserts:
    - {type: AssertEqual, actual: $_response.code, expected: 200}
`,
};

export const testCaseWithFilePassVars = <SnippetItem>{
  label: "testcase: With file passing variables",
  description: "",
  snippet: `---
version: default:testcase:0.7.2

spec:
  execute:
    file: ./file-name.chk
    with:
      var1: "value"
      var2: 0
  asserts:
    - {type: AssertEqual, actual: $_response.code, expected: 200}
`,
};
