const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Whole Number Validation', function() {
        assert.equal(1, convertHandler.getNum('1mi'), 'convertHandler correctly reads whole number input');
    });
    test('Decimal Number Validation', function() {
        assert.equal(1.1, convertHandler.getNum('1.1mi'), 'convertHandler correctly reads decimal number input');
    });
    test('Fraction Number Validation', function() {
        assert.equal(0.5, convertHandler.getNum('1/2mi'), 'convertHandler correctly reads fraction number input');
    });
    test('Invalid Number Validation', function() {
        assert.equal(null, convertHandler.getNum('3/2/3mi'), 'convertHandler returns an error on a double fraction input');
    });
    test('Default Number Validation', function() {
        assert.equal(1, convertHandler.getNum('mi'), 'convertHandler defaults to 1 when no numerical input is provided');
    });
    test('Gallon Unit Validation', function() {
        assert.equal('gal', convertHandler.getUnit('1gal'), 'convertHandler valid unit input');
    });
    test('Liter Unit Validation', function() {
        assert.equal('L', convertHandler.getUnit('1L'), 'convertHandler valid unit input');
    });
    test('Mile Unit Validation', function() {
        assert.equal('mi', convertHandler.getUnit('1mi'), 'convertHandler valid unit input');
    });
    test('Kilometer Unit Validation', function() {
        assert.equal('km', convertHandler.getUnit('1km'), 'convertHandler valid unit input');
    });
    test('Pound Unit Validation', function() {
        assert.equal('lbs', convertHandler.getUnit('1lbs'), 'convertHandler valid unit input');
    });
    test('Kilogram Unit Validation', function() {
        assert.equal('kg', convertHandler.getUnit('1kg'), 'convertHandler valid unit input');
    });
    test('Invalid Unit Validation', function() {
        assert.equal(null, convertHandler.getUnit('min'), 'convertHander returns error for an invalid input unit');
    });
    test('Return Gallon Unit Validation', function() {
        assert.equal('L', convertHandler.getReturnUnit('gal'), 'convertHandler correct returnUnit for valid input unit');
    });
    test('Return Liter Unit Validation', function() {
        assert.equal('gal', convertHandler.getReturnUnit('L'), 'convertHandler correct returnUnit for valid input unit');
    });
    test('Return Mile Unit Validation', function() {
        assert.equal('km', convertHandler.getReturnUnit('mi'), 'convertHandler correct returnUnit for valid input unit');
    });
    test('Return Kilometer Unit Validation', function() {
        assert.equal('mi', convertHandler.getReturnUnit('km'), 'convertHandler correct returnUnit for valid input unit');
    });
    test('Return Pounds Unit Validation', function() {
        assert.equal('kg', convertHandler.getReturnUnit('lbs'), 'convertHandler correct returnUnit for valid input unit');
    });
    test('Return Kilograms Unit Validation', function() {
        assert.equal('lbs', convertHandler.getReturnUnit('kg'), 'convertHandler correct returnUnit for valid input unit');
    });
    test('Spell Out Unit Validation', function() {
        assert.equal('gallons', convertHandler.spellOutUnit('gal'), 'convertHandler correctly returns spelled-out string for each valid input');
        assert.equal('liters', convertHandler.spellOutUnit('L'), 'convertHandler correctly returns spelled-out string for each valid input');
        assert.equal('miles', convertHandler.spellOutUnit('mi'), 'convertHandler correctly returns spelled-out string for each valid input');
        assert.equal('kilometers', convertHandler.spellOutUnit('km'), 'convertHandler correctly returns spelled-out string for each valid input');
        assert.equal('pounds', convertHandler.spellOutUnit('lbs'), 'convertHandler correctly returns spelled-out string for each valid input');
        assert.equal('kilograms', convertHandler.spellOutUnit('kg'), 'convertHandler correctly returns spelled-out string for each valid input');
    });
    test('Unit Conversion Validation', function() {
        assert.equal(3.78541, convertHandler.convert(1, 'gal'), 'convertHandler correctly converts gal to L');
        assert.equal(1, convertHandler.convert(3.78541, 'L'), 'convertHandler correctly converts L to gal');
        assert.equal(0.45359, convertHandler.convert(1, 'lbs'), 'convertHandler correctly converts lbs to kg');
        assert.equal(1, convertHandler.convert(0.453592, 'kg'), 'convertHandler correctly converts kg to lbs');
        assert.equal(1.60934, convertHandler.convert(1, 'mi'), 'convertHandler correctly converts mi to km');
        assert.equal(1, convertHandler.convert(1.60934, 'km'), 'convertHandler correctly converts km to mi');
    })
});