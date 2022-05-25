'use strict';

var bound = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		/* eslint no-useless-call: 1 */
		st['throws'](function () { bound.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { bound.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(bound, t);

	t.end();
});
