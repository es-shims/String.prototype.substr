'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (
		String.prototype.substr
		&& String.prototype.substr.length === 2
		&& '0b'.substr(-1) === 'b' // IE < 9 bug
	) {
		return String.prototype.substr;
	}
	return implementation;
};
