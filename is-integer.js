module.exports = function(x) {
  return typeof x == 'number' && x % 1 === 0;
};
