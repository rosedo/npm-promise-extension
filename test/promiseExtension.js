'use strict';

const assert = require('assert');
require('../src/built/promiseExtension');

describe('module promiseExtension', function() {
    describe('thenEachSeries', function(done) {
        it('should iterate through all elements and succeed when there is no error', function(done) {
            let sum = 0;
            Promise.resolve([2, 4, 6])
            .thenEachSeries(n => sum += n)
            .then(() => {
                if (sum !== 12) {
                    throw new Error('incorrect sum');
                }
                done();
            }).catch(done);
        });
    });
});
