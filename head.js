const assertEqual = function(actual, expected) {
  const equal = '😀 ' + ' Assertion Passed:';
  const notEqual = '😞 ' + ' Assertion Failed:';

  if (actual === expected) {
    console.log(equal + ' ' + [actual] + ' === ' + [expected]);
  } else {
    console.log(notEqual + ' ' + [actual] + ' !== ' + [expected]);
  }
};

const head = function (arr){
    let firstElement = arr[0];
    return firstElement;    
}

assertEqual(head([5,6,7]), 5)
assertEqual(head(['hello', 'lighthouse', 'labs']), 'hello')