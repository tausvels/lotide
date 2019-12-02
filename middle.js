const eqArray = require("./eqArrays");

function middle(arr){
    let ind = Math.round((arr.length - 1) / 2), output = [];
    if(arr.length % 2 !== 0){
        return output.push(arr[ind]) 
    }else{
        output.push(arr[ind-1], arr[ind])
        return (output)
    }
}
module.exports = middle;