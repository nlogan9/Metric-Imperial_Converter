'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    
    const input = req.query.input;
    console.log(input);

    const inputHandler = (input) => {
      //console.log("inputHandler");
      let numError = false;
      let unitError = false;
      let unitRegex = /^(gal||L||mi||km||lbs||kg)$/i
      let returnNum;
      let returnUnit;
      let message;

      let initNum = convertHandler.getNum(input);
      console.log(initNum);
      if (!initNum) {
        numError = true;
      } 
      
      console.log("numError = ", numError);

      const initUnit = convertHandler.getUnit(input);
      console.log(initUnit);
      if (!initUnit) {
        unitError = true;
      }

      if (numError && unitError) {
        message = "invalid number and unit";
        console.log(message);
        return message;
      } else if (numError) {
        message = "invalid number";
        console.log(message);
        return message;
      } else if (unitError) {
        message = "invalid unit";
        console.log(message);
        return message;
      } else {
        returnNum = convertHandler.convert(initNum, initUnit);
        returnUnit = convertHandler.getReturnUnit(initUnit);
        message = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        console.log(message);
        const output = {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: message};
        console.log(output);
        return output;
      }
    }
    const conversion = inputHandler(input);
    res.json(conversion);
  })
};
