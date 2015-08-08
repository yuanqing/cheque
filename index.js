var isInteger = require('./is-integer');

module.exports = {
  isUndefined: require('./is-undefined'),
  isNull: require('./is-null'),
  isBoolean: require('./is-boolean'),
  isFloat: require('./is-float'),
  isInt: isInteger,
  isInteger: isInteger,
  isString: require('./is-string'),
  isNaN: require('./is-nan'),
  isObject: require('./is-object'),
  isArray: require('./is-array'),
  isFunction: require('./is-function')
};
