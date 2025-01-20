import { SnippetItem } from ".";

export const fetchGETWithURLParams = <SnippetItem>{
  label: "http: GET with query string",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/products
  url_params:
    limit: 10
    skip: 5
  method: GET

expose:
  - <% _response %>
`,
};

export const fetchPOSTWithAuthBearer = <SnippetItem>{
  label: "http: POST form submit",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: "https://httpbin.org/post"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  body[form]:
    firstName: "Some"
    lastName: "O' Name"
    age: 51,

expose:
  - <% _response %>
`,
};

export const fetchPOSTWithFormSubmit = <SnippetItem>{
  label: "http: POST with header and bearer token",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: "https://dummyjson.com/auth/me"
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: [PUT-YOUR-TOKEN]

expose:
  - <% _response %>
`,
};

export const fetchPOSTWithJSONBody = <SnippetItem>{
  label: "http: POST with JSON body",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: "https://dummyjson.com/users/add"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  body[json]:
    firstName: "Some"
    lastName: "O' Name"
    age: 51,

expose:
  - <% _response %>
`,
};

export const fetchPUTWithFileUpload = <SnippetItem>{
  label: "http: PUT with file upload",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: "https://httpbin.org/post"
  method: PUT

  headers:
    Accept-Encoding: gzip, deflate

  body[form-data]:
    firstName: "Some"
    lastName: "O' Name"
    age: 51,
    cover_photo: file:///path/to/file/cover-iamge.png
    profile_photo: file:///path/to/file/profile-iamge.png

expose:
  - <% _response %>
`,
};

export const fetchMinimalRequest = <SnippetItem>{
  label: "http: Minimal request",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/test
  method: GET

expose:
  - <% _response %>
`,
};
