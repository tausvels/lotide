// ------------- THE CODE FOR THE ASSERT ARRAYS EQUAL -----------------------

// const eqArray = function(actual, expected) {
//   let equal = true;
//   if (actual.length !== expected.length) equal = false;
//   actual.forEach((item, ind) => {
//     if (item !== expected[ind]) {
//       equal = false;
//     }
//   });
//   return equal;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     let outcome = eqArray(arr1, arr2);
//     if (outcome === true) {
//       console.log("Two arrays are equal");
//     } else {
//       console.log("The arrays are not equal");
//     }
//   } else {
//     console.log("The arrays are not equal");
//   }
// };
// ---------------- I AM CHOSING TO IMPORT THIS ASSERTION FILE ------------------
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const assertionTest = require ('./assertArraysEqual');

assertionTest(results1, words)