var assert = require('assert'),
    Adder = require('./../adder/adder');
  
 suite('Adder', function() {
     test('Adder Instantiation', function() {
         var adder = Adder();
         assert.ok(adder instanceof Adder, "Make new object even if not called with new.");
         
         var adder2 = new Adder();
         assert.ok(adder2 instanceof Adder, "Make new object like we're supposed to.");
     });
 });