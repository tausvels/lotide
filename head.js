const assertEqual = require("./assertEqual");

const head = function (arr){
    let firstElement = arr[0];
    return firstElement;    
}

// assertEqual(head([5,6,7]), 5)
// assertEqual(head(['hello', 'lighthouse', 'labs']), 'hello')

//assertEqual(head([5,6,7]), 5)

// assertEqual(head([1,2,3]), 1)

module.exports = head;