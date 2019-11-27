const a = [1,2,3], b = [1,2,3];

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
  let count = 0;
  if (actual.length === expected.length) {
    actual.forEach((item, ind)=>{
      if (item === expected[ind]) {
        count++;
      }
    });
    if (expected.length === count) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
console.log(assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArray([1, 2, 3], [3, 2, 1]), true));
console.log(assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), true));