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

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd2, dc), false);
// assertEqual(eqObjects(ab, ba), false);
// assertEqual(eqObjects(ab, ba2), true);

module.exports = eqObjects;