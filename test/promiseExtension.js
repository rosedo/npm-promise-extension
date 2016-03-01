'use strict';

var assert = require('assert');
var _ = require('lodash');
var promiseExtensionModule = require('../src/built/promiseExtension');
var promiseExtension = promiseExtensionModule({
});

describe('module promiseExtension', function() {
  describe('managing instances', function() {
    it('module should be a default instance', function() {
      assert.strictEqual(typeof promiseExtensionModule.todoMethod, 'function');
    });
    it('module can create a new instance', function() {
      assert.strictEqual(typeof promiseExtensionModule, 'function');
      assert.strictEqual(typeof promiseExtension, 'function');
      assert.strictEqual(typeof promiseExtension.todoMethod, 'function');
    });
  });
});