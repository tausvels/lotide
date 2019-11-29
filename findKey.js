const assertionTest = require("./assertEqual");

const planets = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
};

const findKey = function(obj, callback) {
  const planetNamesArray = Object.keys(obj);
  let output = "";
  for (const name of planetNamesArray) {
    if (callback(obj[name])) {
      return (output = name); // returns only the FIRST found key
    }
  }
};

findKey(planets, x => x.stars === 3);

// ----------- TEST CASES --------------------//
assertionTest(
  findKey(planets, x => x.stars === 3),
  "Akaleri"
); // ==> Pass
assertionTest(
  findKey(planets, x => x.stars === 1),
  "Blue Hill"
); // ==> Pass
assertionTest(
  findKey(planets, x => x.stars === 2),
  "Ora"
); // ==> Fail
assertionTest(
  findKey(planets, x => x.stars === 3),
  "noma"
); // ==> Fail
