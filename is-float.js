module.exports = function(x) {
  return typeof x == 'number' && isFinite(x);
};
