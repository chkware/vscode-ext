import { ExampleItem } from '.';

export default <ExampleItem>{
  label: 'http: PUT with file upload',
  description: '',
  snippet: `
---
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
