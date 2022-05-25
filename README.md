# String.prototype.substr <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES-spec-compliant `String.prototype.substr`shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.prototype.substr).

## Getting started

```sh
npm install --save string.prototype.substr
```

## Usage/Examples

```js
var assert = require('assert');
var substr = require('string.prototype.substr');

assert(substr('abc', 1) === 'bc');

substr.shim(); // will be a no-op if not needed

assert(substr(' \t\na \t\n') === ' \t\na \t\n'.substr());
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/string.prototype.substr
[npm-version-svg]: https://versionbadg.es/es-shims/String.prototype.substr.svg
[deps-svg]: https://david-dm.org/es-shims/String.prototype.substr.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.substr
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.substr/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.substr#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/string.prototype.substr.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/string.prototype.substr.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/string.prototype.substr.svg
[downloads-url]: https://npm-stat.com/charts.html?package=string.prototype.substr
[codecov-image]: https://codecov.io/gh/es-shims/String.prototype.substr/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/String.prototype.substr/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/String.prototype.substr
[actions-url]: https://github.com/es-shims/String.prototype.substr/actions
