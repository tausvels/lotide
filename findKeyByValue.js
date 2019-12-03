// FUNCTION RETURNS THE KEY OF AN OBJECT WHEN THE SEC0ND PARAMETER 
// IS A MATCH WITH THE VALUE IT CONTAINS

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

const findKeyByValue = function(obj, val) {
  const genre = Object.keys(obj); let output = '';
  for (const type of genre) {
    if (obj[type] === val) {
      output = type;
      return output;
    }
  }
};

//findKeyByValue(bestTVShowsByGenre, 'The Wire')
module.exports = findKeyByValue;
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
