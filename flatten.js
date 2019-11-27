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

  let input = [1, 2, [3, 4], 5, [6]];

  const flatten = function(arr){
    let output = [];
    arr.forEach((item, ind)=>{
        if(Array.isArray(item)){
            flatten(item).forEach((item)=>{
                output.push(item)
            })
        }else{
            output.push(item)
        }
    })
    return output
  }

  console.log(flatten(input))