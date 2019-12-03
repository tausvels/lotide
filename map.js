// FUNCTION TAKES THE ARRAY AND A FUNCTION THAT CHANGES THE ITEM
// OF THE ARRAY TO ANYTHING THAT THE USER WANTS.
//e.g- 'ground' --> 'g'; 'control' --> 'c' 
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
//const results1 = map(words, word => word[0]);
//const assertionTest = require ('./assertArraysEqual');

//assertionTest(results1, words)