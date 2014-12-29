'use strict';

var tape = require('tape');
var fn = require('..').isUndefined;

tape('isUndefined', function(t) {
  t.ok(fn(undefined), 'undefined');
  t.notOk(fn(null), 'null');
  t.notOk(fn(true), 'true');
  t.notOk(fn(false), 'false');
  t.notOk(fn(0), 'zero int');
  t.notOk(fn(42), 'positive int');
  t.notOk(fn(-42), 'negative int');
  t.notOk(fn(3.14), 'positive float');
  t.notOk(fn(-3.14), 'negative float');
  t.notOk(fn(''), 'empty string');
  t.notOk(fn('foo'), 'string');
  t.notOk(fn('0'), 'string 0');
  t.notOk(fn(NaN), 'NaN');
  t.notOk(fn(Infinity), 'Infinity');
  t.notOk(fn(Number.NEGATIVE_INFINITY), 'Number.NEGATIVE_INFINITY');
  t.notOk(fn({}), 'empty plain object');
  t.notOk(fn({ foo: 'bar' }), 'non-empty plain object');
  t.notOk(fn(Object.create({})), 'empty plain object');
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
