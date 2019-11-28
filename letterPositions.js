const eqArray = function(actual,expected) {
  let equal = true;
  if (actual.length !== expected.length) equal = false;
  actual.forEach((item, ind)=>{
    if (item !== expected[ind]) {
      equal = false;
    }
  });
  return equal;
};
  
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

let data = 'lighthouse in the house';
let testData = 'hello';

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

assertArraysEqual(letterPositions(testData).e, [1]);
