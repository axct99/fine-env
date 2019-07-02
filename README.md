# fine-env

Read environment variables from `process.env` as convenient nested object.

[![NPM version](https://img.shields.io/npm/v/fine-env.svg?style=flat-square)](https://www.npmjs.com/package/fine-env)
[![LICENSE](https://img.shields.io/github/license/kovert99/fine-env.svg)](LICENSE)

## Install

```bash
# with npm
npm install fine-env

# or with yarn
yarn add fine-env
```
## Usage

```javascript
const env = require('fine-env');

// getting environment vars from env object

// get PORT 
const port = env.port;

// get MONGODB_URL 
const mongodbUrl = env.mongodb.url;

// get GOOGLE_APP1_CLIENT_ID and GOOGLE_APP1_CLIENT_SECRET
const { id, secret } = env.google.app1.client;
// or use original keys
const { ID, SECRET } = env.google.app1.client;

// get SystemRoot
const { SystemRoot } = env;
// or use camelCase style
const { systemRoot } = env;

// get all vars with prefix GOOGLE_
const { google } = env;
// or with require
const { google } = require('fine-env');

// get rootVar_parentVar_childVar
const { childVar } = env.rootVar.parentVar;

// get DB_HOST, DB_NAME, DB_USERNAME and DB_PASSWORD
const db = env.db;
console.log(db);
```

## License

MIT