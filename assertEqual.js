const assertEqual = function(actual, expected) {
  const equal = "😀 " + " Assertion Passed:";
  const notEqual = "😞 " + " Assertion Failed:";

  if (actual === expected) {
    //console.log(equal + " " + [actual] + " === " + [expected]);
    return true;
  } else {
    //console.log(notEqual + " " + [actual] + " !== " + [expected]);
    return false;
  }
};
module.exports = assertEqual;
