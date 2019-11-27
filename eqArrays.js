const assertEqual = function(actual, expected) {
  const equal = '😀 ' + ' Assertion Passed:';
  const notEqual = '😞 ' + ' Assertion Failed:';
  
  if (actual === expected) {
    return (equal + ' ' + [actual] + ' === ' + [expected]);
  } else {
    return (notEqual + ' ' + [actual] + ' !== ' + [expected]);
  }
};

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
console.log(assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArray([1, 2, 3], [3, 2, 1]), true));
console.log(assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), true));