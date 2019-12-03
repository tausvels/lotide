//FUNCTION RETURNS AN ARRAY OF ITEMS WITHOUT THE ITEM INCLUDED IN THE SECOND
// PARAMETER. THE SECOND PARAMETER OF THE FUNCTION IS AN ARRAY OF ITEM THAT NEED
//TO BE REMOVED. IF IT IS A SINGLE ITEM, PUT IT AS AN ARRAY AS WELL.

//const input = ["1", "2", "3"];


const without = function(arr, itemToRemove) {
  let output;
  let temp;
  output = arr.filter(item => {
    temp = !(itemToRemove.includes(item));
    return temp;
  });
  return output;
};
module.exports = without;
//console.log(without(input, ["2", "3"]));
//console.log("input was: " + input);

//console.log(without([1,2,3], [2,3]))
