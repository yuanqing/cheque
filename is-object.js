module.exports = function(x) {
  return typeof x == 'object' && !!x && x.constructor === Object;
};
