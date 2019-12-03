//FUNCTION RETURNS AN OBJECT CONTAINING 'ITEM TO FIND' AS KEY
// AND THE OCCURANCE OF 'ITEM TO FIND' AS VALUES.
//const assertEqual = require("./assertEqual");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const itemsToCount = { "Jason": true, "Karima": true, "Fang": true };

//'All items' - ARRAY and itemsToCount - Object
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
// const outcome = countOnly(firstNames, itemsToCount);
// console.log(outcome);

// assertEqual(outcome["Jason"], 1);
// assertEqual(outcome["Karima"], undefined);
// assertEqual(outcome["Fang"], 2);