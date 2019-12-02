const assertEqual = require("./assertEqual");

const eqArray = function(actual,expected) {
  let equal = true;
  if (actual.length !== expected.length) 
  equal = false;
  actual.forEach((item, ind)=>{
    if (item !== expected[ind]) {
      equal = false;
    }
  });
  return equal;
};

module.exports = eqArray;