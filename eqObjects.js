const assertEqual = function(actual, expected) {
  const equal = '😀 ' + ' Assertion Passed:';
  const notEqual = '😞 ' + ' Assertion Failed:';
        
  if (actual === expected) {
    console.log(equal + ' ' + [actual] + ' === ' + [expected]);
  } else {
    console.log(notEqual + ' ' + [actual] + ' !== ' + [expected]);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const ab = { a: "1", b: "2", d:"4", c:"3" };
const ba = { b: "2", a: "1", c: "4", d: "4" };
const ba2 = { b: "2", a: "1", c: "3", d: "4" };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd2, dc), false);
assertEqual(eqObjects(ab, ba), false);
assertEqual(eqObjects(ab, ba2), true);