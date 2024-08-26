function ConvertHandler() {
  
  this.getNum = function(input) {
    let numRegex = /^(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)$/
    let inputIndex = input.search(/[a-z]/i)

    let num = input.slice(0, inputIndex);

    let result = num || 1;
    
    if (numRegex.test(result)) {
      return eval(result);
    } else {return null;}

  };
  
  this.getUnit = function(input) {
    let unitRegex = /^(gal||L||mi||km||lbs||kg)$/i

    let inputIndex = input.search(/[a-z]/i)

    let result = input.slice(inputIndex).toLowerCase();

    if (result === "l") {result = "L";}

    if (unitRegex.test(result)) {
      return result;
    } else {return null};
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
    }
    //console.log(result);
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let initUnitString = this.spellOutUnit(initUnit);
    let returnUnitString = this.spellOutUnit(returnUnit);
    
    let result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`
    
    console.log("initNum: ", initNum, " initUnit: ", initUnit, " initunitstring: ", initUnitString, " return unit string: ", returnUnitString);
    return result;
  };

}

module.exports = ConvertHandler;
