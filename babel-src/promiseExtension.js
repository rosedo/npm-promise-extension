'use strict';

Promise.auto = (resolve, reject) => {
    return (err, result) => err ? reject(err) : resolve(result);
};

Promise.promisify = toPromisify => function() {
    const args = Array.prototype.slice.call(arguments);
    return new Promise((resolve, reject) => {
        args.push(Promise.auto(resolve, reject));
        toPromisify.apply(this, args);
    });
};

Promise.use = (argument, thenCallback, catchCallback) => {
    const p = Promise.resolve(argument);
    if (thenCallback) {
        p.then(thenCallback);
    }
    if (catchCallback) {
        p.catch(catchCallback);
    }
    return p;
};

Promise.prototype.thenEachSeries = function(iterator, catchCallback) {
    const promise = this
    .then(obj => new Promise((resolve, reject) => {
        obj = obj || [];
        let nextKey = _keyIterator(obj);
        let key = nextKey();
        function iterate() {
            if (key === null) {
                return resolve();
            }
            Promise.resolve(iterator(obj[key]))
            .then(() => {
                key = nextKey();
                iterate();
            })
            .catch(reject);
        }
        iterate();
    }));
    if (catchCallback) {
        promise.catch(catchCallback);
    }
    return promise;
};

function _isArrayLike(arr) {
    return Array.isArray(arr) || (
        // has a positive integer length property
        typeof arr.length === 'number' &&
        arr.length >= 0 &&
        arr.length % 1 === 0
    );
}

function _keyIterator(coll) {
    let i = -1;
    let len;
    let keys;
    if (_isArrayLike(coll)) {
        len = coll.length;
        return function next() {
            i++;
            return i < len ? i : null;
        };
    } else {
        keys = Object.keys(coll);
        len = keys.length;
        return function next() {
            i++;
            return i < len ? keys[i] : null;
        };
    }
}