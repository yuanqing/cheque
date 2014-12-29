'use strict';

var cheque = {

  isUndefined: function(x) {
    return typeof x == 'undefined';
  },

  isNull: function(x) {
    return x === null;
  },

  isBoolean: function(x) {
    return x === true || x === false;
  },

	isFloat: function(x) { // an integer is also a float
    return typeof x == 'number' && isFinite(x);
	},

  isInteger: function(x) {
    return typeof x == 'number' && x % 1 === 0;
  },

  isString: function(x) {
    return typeof x == 'string';
  },

  isNaN: function(x) {
    return x != x;
  },

  isObject: function(x) { // a "plain" object
    return typeof x == 'object' && !!x && x.constructor === Object;
  },

  isArray: Array.isArray,

  isFunction: function(x) {
    return typeof x == 'function';
  }

};

module.exports = cheque;
