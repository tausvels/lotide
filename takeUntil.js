//FUNCTION TAKES IN AN ARRAY AND A FUNCTION THAT THE USER CONTROLS. THE 
//FUNCTION RETURNS A NEW ARRAY THAT CONTAINS THE PUSHED ITEMS FROM THE 
// ORIGINAL ARRAY UNTIL THE FUNCTION (TAKEN AS 2ND PARAMETER) TELLS WHERE TO
// STOP. e.g.- takeUntil(arr, x => x === ",") RETURNS A NEW ARRAY WITH PUSHED
// ITEMS FROM THE ORIGINAL ARRAY UNTIL IT REACHES THE ITEM WITH ','

//const assertionTest = require('./assertArraysEqual'); // OR GET CODE FROM THE FILE AND PASTE IT HERE

const takeUntil = function(arr, callback){
    let output = [];
    for(items of arr){
        if(!callback(items)){
            output.push(items)
        }
    }
    return output;
}
module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

//const result = takeUntil(data2, x => x === ',');

//assertionTest(result, data2)