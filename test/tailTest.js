const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", ()=>{
    xit("Returns the entire array without the first index", ()=>{
        assert.deepEqual(tail([1,2,3]), [2,3]);
    })
})