import { SnippetItem } from ".";

export const fetchGETWithURLParams = <SnippetItem>{
  label: "http: GET with query string",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/get

  url_params:
    foo: bar
    two: 2
  method: GET
`,
};

export const fetchPOSTWithAuthBearer = <SnippetItem>{
  label: "http: POST form submit",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  auth .scm=bearer:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c

  body .enc=form:
    user_id: 32,
    roll_no: 1,
    class: 2,
    name: 'Student name'

    # note: this will just set photo with file path as string, 
    # to upload the actual file use "body .enc=form-data" instead
    photo: file:///home/username/student-photo-01.png
`,
};

export const fetchPOSTWithFormSubmit = <SnippetItem>{
  label: "http: POST with header and bearer token",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth .scm=bearer:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c  
`,
};

export const fetchPOSTWithJSONBody = <SnippetItem>{
  label: "http: POST with JSON body",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth .scm=bearer:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c  
`,
};

export const fetchPUTWithFileUpload = <SnippetItem>{
  label: "http: PUT with file upload",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/put
  method: PUT

  headers:
    Accept-Encoding: gzip, deflate

  auth .scm=bearer:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c

  body .enc=form-data:
    user_id: 32,
    roll_no: 1,

    # note: this will upload the file
    cover_photo: file:///home/username/student-cvphoto-01.png
`,
};

export const fetchMinimalRequest = <SnippetItem>{
  label: "http: Minimal request",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/get
  method: GET
`,
};
