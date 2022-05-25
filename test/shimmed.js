'use strict';

var orig = String.prototype.substr;

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.comment('shimmed: ' + (orig === String.prototype.substr ? 'no' : 'yes'));

	t.equal(String.prototype.substr.length, 2, 'String#substr has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.substr.name, 'substr', 'String#substr has name "substr"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'substr'), 'String#substr is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return String.prototype.substr.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return String.prototype.substr.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(String.prototype.substr), t);

	t.end();
});
