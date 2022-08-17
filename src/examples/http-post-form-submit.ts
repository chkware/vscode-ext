import { ExampleItem } from '.';

export default <ExampleItem>{
  label: 'http: POST form submit',
  description: '',
  snippet: `
---
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
