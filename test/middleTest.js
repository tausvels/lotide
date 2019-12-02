const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", ()=>{
    it("Returns the middle number/numbers of the array", ()=>{
        assert.deepEqual(middle([1,2,3]), [2]);
    })
    it("Returns the middle number/numbers of the array", ()=>{
        assert.deepEqual(middle([1,2,3,4]), [2,3]);
    })
    it("Returns the middle number/numbers of the array", ()=>{
        assert.deepEqual(middle([71,41,55,66,89,74,100,99]), [66,89]);
    })
    it("Returns the middle number/numbers of the array", ()=>{
        assert.deepEqual(middle([11,25,74,87,60]), [74]);
    })
    it("Returns the middle number/numbers of the array", ()=>{
        assert.deepEqual(middle([1,22,43,81,66]), [43]);
    })
})