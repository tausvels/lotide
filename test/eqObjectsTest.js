const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", ()=>{
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    const ab = { a: "1", b: "2", d:"4", c:"3" };
    const ba = { b: "2", a: "1", c: "4", d: "4" };
    const ba2 = { b: "2", a: "1", c: "3", d: "4" };
    
    it("returns TRUE for 2 EQUAL objects", ()=>{
        assert.strictEqual(eqObjects(cd, dc), true);
    })

    it("returns FALSE for 2 UNEQUAL objects", ()=>{
        assert.strictEqual(eqObjects(cd, cd2), false);
    })

    it("returns FALSE for 2 UNEQUAL objects", ()=>{
        assert.strictEqual(eqObjects(ab, ba), false);
    })

    it("returns TRUE for 2 EQUAL objects", ()=>{
        assert.strictEqual(eqObjects(ab, ba2), true);
    })
})