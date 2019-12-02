//const eqArray = require("./eqArrays");
// let input = [1, 2, [3, 4], 5, [6]];

const flatten = function(arr) {
  let output = [];
  arr.forEach((item, ind) => {
    if (Array.isArray(item)) {
      flatten(item).forEach(item => {
        output.push(item);
      });
    } else {
      output.push(item);
    }
  });
  return output;
};

//console.log(flatten(input))
module.exports = flatten;
