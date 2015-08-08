# cheque.js [![npm Version](http://img.shields.io/npm/v/cheque.svg?style=flat)](https://www.npmjs.org/package/cheque) [![Build Status](https://img.shields.io/travis/yuanqing/cheque.svg?style=flat)](https://travis-ci.org/yuanqing/cheque) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/cheque.svg?style=flat)](https://coveralls.io/r/yuanqing/cheque)

> Type checking, for when you only use JavaScript&rsquo;s [Good Parts](https://youtu.be/hQVTIJBZook).

## Usage

```js
var cheque = require('cheque');

cheque.isUndefined(undefined);    //=> true
cheque.isNull(null);              //=> true
cheque.isBoolean(true);           //=> true
cheque.isFloat(42);               //=> true
cheque.isFloat(3.14);             //=> true
cheque.isInteger(42);             //=> true
cheque.isString('foo');           //=> true
cheque.isNaN(NaN);                //=> true
cheque.isObject({});              //=> true
cheque.isObject([]);              //=> false
cheque.isArray([]);               //=> true
cheque.isFunction(function() {}); //=> true
```

Some things to note:

1. `isFloat` returns `true` for integers too.
2. `isObject` returns `true` for &ldquo;plain&rdquo; objects only.

[There are lots of tests.](test)

If you like, you can `require` the functions individually. For example:

```js
var isObject = require('cheque/is-object');
```

## Caveat emptor

You must *not* do terrible things like:

```js
var boo = new Boolean(true);
var bad = new Number(42);
var noo = new String('foo');
```

Instead, do:

```js
var yay = true;
var god = 42;
var yes = 'foo';
```

## Installation

Install via [npm](https://www.npmjs.org/):

```
$ npm i --save cheque
```

## Changelog

- 0.3.0
  - Move functions into separate files
- 0.2.0
  - Add polyfill for `Array.isArray`
- 0.1.0
  - Initial release

## License

[MIT](LICENSE.md)
