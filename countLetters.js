const assertEqual = function(actual, expected) {
  const equal = '😀 ' + ' Assertion Passed:';
  const notEqual = '😞 ' + ' Assertion Failed:';
    
  if (actual === expected) {
    console.log(equal + ' ' + [actual] + ' === ' + [expected]);
  } else {
    console.log(notEqual + ' ' + [actual] + ' !== ' + [expected]);
  }
};

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

let outcome = countLetters(data); console.log(outcome);