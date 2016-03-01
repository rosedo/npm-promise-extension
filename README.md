# Adds class functions and methods to the Promise class

## Installation
```sh
$ npm install --save promise-extension
```

## Prerequisites
See async README: <https://github.com/caolan/async>

## Usage
```js
require('promise-extension');

// if Promise isn't defined
global.Promise = require('promise-module');
var promiseExtension = require('promise-extension');
```

### thenEachSeries
From async.eachSeries, rearranged for promises:
```js
Promise.resolve([2, 4, 5])
.thenEachSeries(number => console.log(number))
.then(() => console.log('Done'))
.catch(console.error);

Promise.resolve([2, 4, 5])
.thenEachSeries(number => new Promise((resolve, reject) => {
    console.log(number);
    setTimeout(resolve, 1000);
}))
.then(() => console.log('Done'))
.catch(console.error);
```

## Running tests
```sh
$ npm install
$ npm test
```