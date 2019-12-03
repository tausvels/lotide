const eqArray = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let outcome = eqArray(arr1, arr2);
    if (outcome === true) {
      //console.log('Two arrays are equal');
      return true
    } else {
      //console.log('The arrays are not equal');
      return false
    }
  } else {
    //console.log('The arrays are not equal');
    return false
  }
};
//let a = [1,2,[1,2],3], b = [1,2,[1,2],3];
//console.log(assertArraysEqual(a,b))
module.exports = assertArraysEqual;