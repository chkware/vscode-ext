import { SnippetItem } from ".";

export const httpGETWithURLParams = <SnippetItem>{
  label: "fetch: GET with query string [DEPRECATED, use fetch]",
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

export const httpPOSTWithAuthBearer = <SnippetItem>{
  label: "fetch: POST form submit [DEPRECATED, use fetch]",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  auth[bearer]:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c

  body[form]:
    user_id: 32,
    roll_no: 1,
    class: 2,
    name: 'Student name'

    # note: this will just set photo with file path as string, 
    # to upload the actual file use body[form-data] instead
    photo: file:///home/username/student-photo-01.png
`,
};

export const httpPOSTWithFormSubmit = <SnippetItem>{
  label: "fetch: POST with header and bearer token [DEPRECATED, use fetch]",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c  
`,
};

export const httpPOSTWithJSONBody = <SnippetItem>{
  label: "fetch: POST with JSON body [DEPRECATED, use fetch]",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/post
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c  
`,
};

export const httpPUTWithFileUpload = <SnippetItem>{
  label: "fetch: PUT with file upload [DEPRECATED, use fetch]",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/put
  method: PUT

  headers:
    Accept-Encoding: gzip, deflate

  auth[bearer]:
    token: eyJhbGciOiJIU4fwpMeJf36POk6yJV_adQssw5c

  body[form-data]:
    user_id: 32,
    roll_no: 1,

    # note: this will upload the file
    cover_photo: file:///home/username/student-cvphoto-01.png
`,
};

export const minimalRequest = <SnippetItem>{
  label: "fetch: Minimal request [DEPRECATED, use fetch]",
  description: "",
  snippet: `---
version: default:http:0.7.2

request:
  url: https://httpbin.org/get
  method: GET
`,
};
