const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", ()=>{
    it("Returns the middle number/numbers of the array", ()=>{
        assert.deepEqual(middle([1,2,3]), [2]);
    })
})