'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');
var callBind = require('call-bind');
var callBound = require('call-bind/callBound');

var implementation = require('./implementation');

var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();

var shim = require('./shim');

var $slice = callBound('Array.prototype.slice');

// eslint-disable-next-line no-unused-vars
var bound = function substr(string, start, length) {
	RequireObjectCoercible(string);
	return callBind.apply(polyfill, string, $slice(arguments, 1))();
};

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;
