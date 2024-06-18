![Gambar](src/images/icons-x72.png)# NusaPena
Back-End REST API for NusaPena

## GETTING STARTED
### Instalations
Install all necessary packages using NPM
```bash
npm install
```

### Run Project
#### Production Mode
```bash
npm run start
```
or
#### Development Mode
```bash
npm run start-dev
```

#### Run ESLint 
```bash
npm run lint
```
or
#### Run ESLint with Auto Fix
```bash
npm run lint-fix
```

#### Run Image Resizer
```bash
npm run resize-images
```

#### Run newman (Postman) Test Locally
```bash
npm run test-local
```
or
#### Run newman (Postman) Test API
```bash
npm run test-api
```



## API Documentation
### Base URL Endpoint
```bash
nusapena-api.vercel.app
```

### Get List of Stories
Endpoint  : `/list`  
method    : `GET`

Response JSON :
```bash
  status: "success",
  stories: [ 
    {
      "id": "string",
      "title": "string",
      "category": "string",
      "origin": "string",
      "imageId": "string",
      "synopsis": "string"
    }
  ]
```

### Get Filtered List of Stories By 'title'
Endpoint  : `/list?title=<query>`  
method    : `GET`

Response JSON :
```bash
  status: "success",
  stories: [ 
    {
      "id": "string",
      "title": "string",
      "category": "string",
      "origin": "string",
      "imageId": "string",
      "synopsis": "string"
    }
  ]
```

### Get Filtered List of Stories By 'category'
Endpoint  : `/list?category=query>`  
method    : `GET`

Response JSON :
```bash
  status: "success",
  stories: [ 
    {
      "id": "string",
      "title": "string",
      "category": "string",
      "origin": "string",
      "imageId": "string",
      "synopsis": "string"
    }
  ]
```

### Get Detail of Story
Endpoint  : `/details/:id`  
method    : `GET`  

Response JSON :  
Success Response
```bash
  status: "success",
  story: {
    "id": "string",
    "title": "string",
    "category": "string",
    "origin": "string",
    "imageId": "string",
    "storyDesc": "string",
    "morals": "string",
    "synopsis": "string"
  }
```
Fail Response
```bash
{
  "status": "fail",
  "message": "Detail cerita tidak ditemukan"
}
```

### Stories Image
Small Resolution  : `nusapena-api.vercel.app/images/small/<imageId>`  
Medium Resolution : `nusapena-api.vercel.app/images/medium/<imageId>`  
Large Resolution  : `nusapena-api.vercel.app/images/large/<imageId>`
