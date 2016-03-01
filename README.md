# TODO description

## Installation
```sh
$ npm install --save promise-extension
```

## Usage
```js
// require default instance (created with default options)
const promiseExtension = require('promise-extension');

// override default options
const promiseExtension = require('promise-extension')({ anOption: true });

// making an instance available to other files
const promiseExtension = require('promise-extension');
promiseExtension.anInstance = promiseExtension({ anOption: true });

// if Promise isn't defined
global.Promise = require('promise-module');
var promiseExtension = require('promise-extension');
```

### TODO usage example
```js
```

## Running tests
```sh
$ npm install
$ npm test
```