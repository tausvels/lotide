const assert = require("chai").assert;
const eqArray = require("../eqArrays");

describe("#eqArray", ()=>{
    it("returns TRUE for equal arrays", ()=>{
        assert.strictEqual(eqArray([1, 2, 3], [1, 2, 3]), true)
    });
    it("returns FALSE for different arrays", ()=>{
        assert.strictEqual(eqArray([1, 2, 3], [3, 2, 1]), false)
    });
    it("returns TRUE for same arrays having multiple arrays inside", ()=>{
        assert.strictEqual(eqArray([1,2,[3,9],3,4], [1,2,[3,4],3,4]), false)
    });
    it("returns FALSE for differnt arrays having multiple levels of arrays inside", ()=>{
        assert.strictEqual(eqArray([1,2,[4,[7,8,9],5],3,4], [1,2,[4,,[7,8,8],5],3,4]), false)
    });
    it("returns TRUE for same arrays having multiple levels of arrays inside", ()=>{
        assert.strictEqual(eqArray([1,2,[4,[7,8,9],5],3,4], [1,2,[4,,[7,8,9],5],3,4]), true)
    });
    it("returns FALSE for same arrays having different data types", ()=>{
        assert.strictEqual(eqArray(["1","2","3"], [1,2,3]), false)
    });
    it("returns FALSE for same arrays that have even a single item of different data type", ()=>{
        assert.strictEqual(eqArray(["1","2","3"], ["1",2,"3"]), false)
    });
})