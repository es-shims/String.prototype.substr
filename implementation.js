'use strict';

var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');
var substring = require('es-abstract/2023/substring');
var ToIntegerOrInfinity = require('es-abstract/2023/ToIntegerOrInfinity');
var ToString = require('es-abstract/2023/ToString');

var max = Math.max;
var min = Math.min;

module.exports = function substr(start, length) {
	var O = RequireObjectCoercible(this); // step 1

	var S = ToString(O); // step 2

	var size = S.length; // step 3

	var intStart = ToIntegerOrInfinity(start); // step 4

	if (intStart === -Infinity) {
		intStart = 0; // step 5
	} else if (intStart < 0) {
		intStart = max(size + intStart, 0);
	} // step 6

	var intLength = typeof length === 'undefined' ? size : ToIntegerOrInfinity(length); // step 7

	if (intStart === Infinity || intLength <= 0 || intLength === Infinity) {
		return ''; // step 8
	}

	var intEnd = min(intStart + intLength, size); // step 9

	if (intStart >= intEnd) {
		return ''; // step 10
	}

	return substring(S, intStart, intEnd); // step 11
};
