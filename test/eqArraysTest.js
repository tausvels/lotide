const assertEqual = require("../assertEqual");
const eqArray = require("../eqArrays");

console.log(assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArray([1,2,[3,9],3,4], [1,2,[3,4],3,4]), false));