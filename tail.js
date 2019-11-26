const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const assertEqual = function(actual, expected) {
  const equal = '😀 ' + ' Assertion Passed:';
  const notEqual = '😞 ' + ' Assertion Failed:';
  let temp = [];
  if (actual.length === expected.length) {
    actual.forEach((element, index) => {
      if (element === expected[index]) {
        temp.push(expected[index]);
      }
    });
    if (temp.length === expected.length) {
      console.log(equal + ' ' + [actual] + ' === ' + [expected]);
    } else {
      console.log(notEqual + ' ' + [actual] + ' !== ' + [expected]);
    }
  } else {
    console.log(notEqual + ' ' + [actual] + ' !== ' + [expected]);
  }
};
assertEqual(tail([1,2,3,4,5]), [1,2,3,4,5]);
  