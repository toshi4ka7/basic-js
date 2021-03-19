const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(value) {
  if (typeof value !== 'string') return false
  if (Number.isNaN(+value)) return false
  if ((+value) + '' !== value) return false
  if (value == 0) return false

  const k = 0.693 / HALF_LIFE_PERIOD;
  const res = Math.ceil(((Math.log(MODERN_ACTIVITY / +value)) / k))
  if (Number.isNaN(res)) return false
  return res <= 0 ? false : res
};
