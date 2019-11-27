const eqArray = function(actual,expected) {
  let equal = true;
  if (actual.length !== expected.length) equal = false;
  actual.forEach((item, ind)=>{
    if (item !== expected[ind]) {
      equal = false;
    }
  });
  return equal;
};
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let outcome = eqArray(arr1, arr2);
    if (outcome === true) {
      console.log('Two arrays are equal');
    } else {
      console.log('The arrays are not equal');
    }
  } else {
    console.log('The arrays are not equal');
  }
};

const input = ["1", "2", "3"], itemToRemove = ["2", "3"];
const without = function(arr, itemToRemove) {
  let output = '', temp = '';
  output = arr.filter((item)=>{
    temp = itemToRemove.includes(item);
    //console.log(b)
    return temp;
  });
  console.log(output);
};
console.log(without(input, [1, 2, "3"]));
without(input, itemToRemove); console.log('input was: ' + input);
