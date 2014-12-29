'use strict';

var tape = require('tape');
var fn = require('..').isNaN;

tape('isNaN', function(t) {
  t.notOk(fn(undefined), 'undefined');
  t.notOk(fn(null), 'null');
  t.notOk(fn(true), 'true');
  t.notOk(fn(false), 'false');
  t.notOk(fn(0), 'zero integer');
  t.notOk(fn(42), 'positive integer');
  t.notOk(fn(-42), 'negative integer');
  t.notOk(fn(3.14), 'positive float');
  t.notOk(fn(-3.14), 'negative float');
  t.notOk(fn(''), 'empty string');
  t.notOk(fn('foo'), 'string');
  t.notOk(fn('0'), 'string zero');
  t.ok(fn(NaN), 'NaN');
  t.notOk(fn(Infinity), 'Infinity');
  t.notOk(fn(Number.NEGATIVE_INFINITY), 'Number.NEGATIVE_INFINITY');
  t.notOk(fn({}), 'empty "plain" object');
  t.notOk(fn({ foo: 'bar' }), 'non-empty "plain" object');
  t.notOk(fn(Object.create({})), 'empty "plain" object');
  t.notOk(fn(new Date()), '"custom" object');
  t.notOk(fn(Object.create(Date)), 'inherited "custom" object');
  t.notOk(fn([]), 'empty array');
  t.notOk(fn(['foo']), 'non-empty array');
  t.notOk(fn(function() {}), 'function');
  t.notOk(fn(Date), 'function');
  t.notOk(fn(new Boolean(true)), 'new Boolean');
  t.notOk(fn(new Number(42)), 'new Number');
  t.notOk(fn(new String('foo')), 'new String');
  t.end();
});
