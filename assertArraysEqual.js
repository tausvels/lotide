const eqArray = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let outcome = eqArray(arr1, arr2);
    if (outcome === true) {
      console.log('Two arrays are equal');
    } else {
      console.log('The arrays are not equal');
    }
  } else {
    console.log('The arrays are not equal');
  }
};
module.exports = assertArraysEqual;