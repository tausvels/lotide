const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

describe("#assertArraysEqual", ()=>{
    it("returns true for equal arrays", ()=>{
        assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), true)
    })
    it("returns false different arrays", ()=>{
        assert.strictEqual(assertArraysEqual([1,2,[1,2],3],[1,2,3]), false)
    })
})