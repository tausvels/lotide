const assertArraysEqual = require("../assertArraysEqual");

const a = [1,2,[3,4],3], b = [1,2,[3,4],3];

assertArraysEqual(a, b);