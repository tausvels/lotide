// FUNCTION RETURNS AN OBJECT CONTAINING ALL THE LETTERS
// WITHIN A STRING AS KEY AND THEIR OCCURANCES AS 'VALUES'

let data = 'lighthouse in the house';

const countLetters = function(input) {
  const result = {};
  const temp = input.split(' ').join('').split('');
  for (const letter of temp) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

// let outcome = countLetters(data); 
// console.log(outcome);