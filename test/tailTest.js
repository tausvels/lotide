const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail([1,2,3]).length, 2);

assertEqual(tail([1,2,3,4,5]).length, 4);