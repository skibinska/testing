var test = require('tape');
var calculator = require('../index.js');

test('Should add two numbers', function (t) {
  var test = calculator.add(1,2);
  t.equal(test, 3);
  t.end();
});
