const assertEqual = function(actual, expected) {
  const equal = "😀 " + " Assertion Passed:";
  const notEqual = "😞 " + " Assertion Failed:";

  if (actual === expected) {
    console.log(equal + " " + [actual] + " === " + [expected]);
  } else {
    console.log(notEqual + " " + [actual] + " !== " + [expected]);
  }
};
module.exports = assertEqual;
