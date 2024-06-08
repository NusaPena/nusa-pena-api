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

## API Documentation
### Base URL Endpoint
```bash
localhost:5000
```

### Get List of Stories
Endpoint  : `/list`            <br>
method    : `GET`              <br>

Response JSON :
```bash
  status: "success",
  stories: [ 
      { id, title, category, imageId, storyDesc }
  ]
```

### Get Detail of Story
Endpoint  : `bash/details/:id` <br>
method    : `GET`              <br>
```bash
  status: "success",
  stories: [ 
      { id, title, category, imageId, storyDesc, morals }
  ]
```

### Stories Image
Small Resolution  : `localhost:5000/images/small/<imageId>`  <br>
Medium Resolution : `localhost:5000/images/medium/<imageId>` <br>
Large Resolution  : `localhost:5000/images/large/<imageId>`  <br>
