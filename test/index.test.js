var test = require('tape');
var calculator = require('../index.js');

test('Should add two numbers', function (t) {
  var test = calculator.add(1,2);
  t.equal(test, 3);
  t.end();
});

test('Should multiply two numbers', function (t) {
  var test = calculator.multiply(1,2);
  t.equal(test, 2);
  t.end();
});

test('Should divide by two numbers', function (t) {
  var test = calculator.divide(6,2);
  t.equal(test, 3);
  t.end();
});
