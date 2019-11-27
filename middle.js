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

let input = [1,5,3];

function middle(arr){
    let ind = Math.round((arr.length - 1) / 2), output = [];
    if(arr.length % 2 !== 0){
        return output.push(arr[ind]) 
    }else{
        output.push(arr[ind-1], arr[ind])
        return (output)
    }
}
assertArraysEqual(middle([1,5,3,4,6,7]), [5])