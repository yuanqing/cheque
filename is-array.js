module.exports = Array.isArray || function(x) {
  return Object.prototype.toString.call(x) == '[object Array]';
};
