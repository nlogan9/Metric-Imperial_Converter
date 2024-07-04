const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  // Test 1: convertHandler should correctly read a whole number input.
  test('Whole number input', function() {
    assert.equal(convertHandler.getNum('32mi'), 32);
  });

  // Test 2: convertHandler should correctly read a decimal number input.
  test('Decimal number input', function() {
    assert.approximately(convertHandler.getNum('2.5gal'), 2.5, 0.1);
  });

  // Test 3: convertHandler should correctly read a fractional input.
  test('Fractional input', function() {
    assert.equal(convertHandler.getNum('1/2km'), 0.5);
  });

  // Test 4: convertHandler should correctly read a fractional input with a decimal.
  test('Fractional input with decimal', function() {
    assert.approximately(convertHandler.getNum('3.5/2lbs'), 1.75, 0.1);
  });

  // Test 5: convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  test('Double-fraction input', function() {
    assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number');
  });

  // Test 6: convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test('No numerical input provided', function() {
    assert.equal(convertHandler.getNum('kg'), 1);
  });

  // Test 7: convertHandler should correctly read each valid input unit.
  test('Valid input unit', function() {
    assert.equal(convertHandler.getUnit('10km'), 'km');
  });

  // Test 8: convertHandler should correctly return an error for an invalid input unit.
  test('Invalid input unit', function() {
    assert.equal(convertHandler.getUnit('10kilos'), 'invalid unit');
  });

  // Test 9: convertHandler should return the correct return unit for each valid input unit.
  test('Return unit for valid input unit', function() {
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
  });

  // Test 10: convertHandler should correctly return the spelled-out string unit for each valid input unit.
  test('Spelled-out unit for valid input unit', function() {
    assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
  });

  // Test 11: convertHandler should correctly convert gal to L.
  test('Convert gal to L', function() {
    assert.equal(convertHandler.convert(5, 'gal'), 18.9271);
  });

  // Test 12: convertHandler should correctly convert L to gal.
  test('Convert L to gal', function() {
    assert.equal(convertHandler.convert(10, 'L'), 2.64172);
  });

  // Test 13: convertHandler should correctly convert mi to km.
  test('Convert mi to km', function() {
    assert.equal(convertHandler.convert(5, 'mi'), 8.04672);
  });

  // Test 14: convertHandler should correctly convert km to mi.
  test('Convert km to mi', function() {
    assert.equal(convertHandler.convert(10, 'km'), 6.21371);
  });

  // Test 15: convertHandler should correctly convert lbs to kg.
  test('Convert lbs to kg', function() {
    assert.equal(convertHandler.convert(5, 'lbs'), 2.26796);
  });

  // Test 16: convertHandler should correctly convert kg to lbs.
  test('Convert kg to lbs', function() {
    assert.equal(convertHandler.convert(10, 'kg'), 22.0462);
  });

});

