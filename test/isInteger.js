var test = require('tape');
var check = require('..');

test('isInteger', function(t) {

  t.equal(check.isInteger, check.isInt);

  t.end();

});
