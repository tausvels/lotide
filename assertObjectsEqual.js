const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let state = false;
  state = eqObjects(actual, expected);
  if (state === true) {
    return state;
    //return (`Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return state;
    //return (`Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };               // cd => c: '1' d: ['2', 3]
const dc = { d: ["2", 3], c: "1" };               // dc => c: '1' d: ['2', 3]
const cd2 = { c: "1", d: ["2", 3, 4] };           // cd2 => c: "1", d: ["2", 3, 4]
  
const ab = { a: "1", b: "2", d:"4", c:"3" };      // ab => a: 1 b: 2 c: 3 d: 4
const ba = { b: "2", a: "1", c: "4", d: "4" };    // ba => a: 1 b: 2 c: 4 d: 4
const ba2 = { b: "2", a: "1", c: "3", d: "4" };   // ba2 => a: 1 b: 2 c: 3 d: 4

// ----------- TEST CASES --------------------- //

// console.log(assertObjectsEqual(ab, ba)); // fail
// console.log(assertObjectsEqual(ab, ba2)); // pass
// console.log(assertObjectsEqual(ba, ba2)); // fail
// console.log(assertObjectsEqual(cd, dc));  // pass
// console.log(assertObjectsEqual(cd, cd2)); // fail
// console.log(assertObjectsEqual(dc, cd2)); // fail

//assertObjectsEqual(ab, ba)

module.exports = assertObjectsEqual;