const assertEqual = function(actual, expected) {
  const equal = '😀 ' + ' Assertion Passed:';
  const notEqual = '😞 ' + ' Assertion Failed:';

  if (actual === expected) {
    console.log(equal + ' ' + [actual] + ' === ' + [expected]);
  } else {
    console.log(notEqual + ' ' + [actual] + ' !== ' + [expected]);
  }
};

//assertEqual('Lighouse Labs', 'bootcamp');

//assertEqual(1, 1);

module.exports = assertEqual;