'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimStringPrototypeSubstr() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ substr: polyfill },
		{ substr: function () { return String.prototype.substr !== polyfill; } }
	);
	return polyfill;
};
