//FUNCTION RETURNS ALL THE POSITIONS OF A PARTICULAR LETTER IN A STRING
// SYNTAX IS letterPositions(data).yourLetterOfChoice

// const eqArrays = require("./eqArrays")
// const assertArraysEqual = require("./assertArraysEqual");

// let data = 'lighthouse in the house';
// let testData = 'hello';

const letterPositions = function(input) {
  const result = {}, temp = input.split('');

  temp.forEach((letter, ind)=>{
    if (result[letter]) {
      result[letter].push(ind);
    } else {
      if (letter !== ' ') {
        result[letter] = [ind];
      }
    }
  });
  return result;
};
module.exports = letterPositions;

//console.log(assertArraysEqual(letterPositions(testData).e, [1]));
//console.log(letterPositions(data).i)
