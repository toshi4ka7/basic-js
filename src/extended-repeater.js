const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str += '';
  options.repeatTimes || 0;
  if (options.separator === undefined) {
    options.separator = '+';
  }
  options.separator += '';
  if (options.addition === undefined) {
    options.addition = '';
  }
  options.addition += '';
  options.additionRepeatTimes || 0;
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  options.additionSeparator += '';


  let strAddition = '';
  if (options.additionRepeatTimes) {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      if (i === options.additionRepeatTimes) {
        strAddition += options.addition;
      } else {
        strAddition += options.addition + options.additionSeparator;
      }
    }
  } else {
    strAddition = options.addition;
  }

  let newStr = '';
  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      if (i === options.repeatTimes) {
        newStr += str + strAddition;
      } else {
        newStr += str + strAddition + options.separator;
      }
    }
  } else {
    newStr = str + strAddition;
  }

  return newStr;
};
  