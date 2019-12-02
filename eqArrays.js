const assertEqual = require("./assertEqual");
const flatten = require("./flatten");

const eqArray = function(act, exp) {
  let state = Boolean;
  if (act.length !== exp.length) {
    return false;
  }
  act = flatten(act); exp = flatten(exp);
  for (let i = 0; i < act.length; i++) {
    if (act[i] !== exp[i]) {
      return false;
    } else {
      state = true;
    }
  }
  return state;
};
module.exports = eqArray;