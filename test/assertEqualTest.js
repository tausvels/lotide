const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", ()=>{
    it("returns true for equal string (case sensitive)", ()=>{
        assert.strictEqual(assertEqual("Tausif", "Tausif"), true)
    });
    it("returns false for different strings (case sensitive)", ()=>{
        assert.strictEqual(assertEqual("Monster","Mobile"), false)
    });
    it("returns false for same strings (but case sensitive)", ()=>{
        assert.strictEqual(assertEqual("Laptop","laptop"), false)
    })
})