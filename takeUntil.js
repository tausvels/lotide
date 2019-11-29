const assertionTest = require('./assertArraysEqual'); // OR GET CODE FROM THE FILE AND PASTE IT HERE

const takeUntil = function(arr, callback){
    let output = [];
    for(items of arr){
        if(!callback(items)){
            output.push(items)
        }
    }
    return output;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const result = takeUntil(data2, x => x === ',');

assertionTest(result, data2)