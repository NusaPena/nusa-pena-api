# NusaPena
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


## API Documentation
### Base URL Endpoint
```bash
localhost:5000
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
Small Resolution  : `localhost:5000/images/small/<imageId>`  
Medium Resolution : `localhost:5000/images/medium/<imageId>`  
Large Resolution  : `localhost:5000/images/large/<imageId>`
