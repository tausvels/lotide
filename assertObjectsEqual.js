const eqObjects = function(object1,object2) {
  let propObject1 = Object.keys(object1), propObject2 = Object.keys(object2), state = false;
      
  if (propObject1.length !== propObject2.length) {
    return state = false;
  } else {
    for (const prop in object1) {
      if (object1[prop].length === object2[prop].length && object1[prop].length > 1) {
        if (object1[prop].length > 1) {
          object1[prop].forEach((element,ind) => {
            if (element !== object2[prop][ind]) {
              return state = false;
            }
          });
        }
      } else {
        if (object1[prop] === object2[prop]) {
          state = true;
        } else {
          return state = false;
        }
      }
    }
  }
  return state;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let state = false;
  state = eqObjects(actual, expected);
  if (state === true) {
    return (`Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return (`Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const cd = { c: "1", d: ["2", 3] };               // cd => c: '1' d: ['2', 3]
const dc = { d: ["2", 3], c: "1" };               // dc => c: '1' d: ['2', 3]
const cd2 = { c: "1", d: ["2", 3, 4] };           // cd2 => c: "1", d: ["2", 3, 4]
  
const ab = { a: "1", b: "2", d:"4", c:"3" };      // ab => a: 1 b: 2 c: 3 d: 4
const ba = { b: "2", a: "1", c: "4", d: "4" };    // ba => a: 1 b: 2 c: 4 d: 4
const ba2 = { b: "2", a: "1", c: "3", d: "4" };   // ba2 => a: 1 b: 2 c: 3 d: 4

// ----------- TEST CASES --------------------- //
console.log(assertObjectsEqual(ab, ba)); // fail
console.log(assertObjectsEqual(ab, ba2)); // pass
console.log(assertObjectsEqual(ba, ba2)); // fail
console.log(assertObjectsEqual(cd, dc));  // pass
console.log(assertObjectsEqual(cd, cd2)); // fail
console.log(assertObjectsEqual(dc, cd2)); // fail

//assertObjectsEqual(ab, ba)