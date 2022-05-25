import callBind from 'call-bind';
import callBound from 'call-bind/callBound';
import RequireObjectCoercible from 'es-abstract/2021/RequireObjectCoercible.js';

import getPolyfill from 'string.prototype.substr/polyfill';

const polyfill = getPolyfill();

var $slice = callBound('Array.prototype.slice');

// eslint-disable-next-line no-unused-vars
export default function substr(string, start, length) {
	RequireObjectCoercible(string);
	return callBind.apply(polyfill, string, $slice(arguments, 1))();
}

export { default as getPolyfill } from 'string.prototype.substr/polyfill';
export { default as implementation } from 'string.prototype.substr/implementation';
export { default as shim } from 'string.prototype.substr/shim';
