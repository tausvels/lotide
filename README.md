# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tausvels/lotide`

**Require it:**

`const _ = require('@tausvels/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Returns true for two equal arrays
* `function2(assertEqual)`: Returns true for two strings
* `function3(assertObjectEqual)`: Returns true for equal objects
* `function4(countLetters)`: Returns an object with all letters in the string as object properties and their occurances as values.
* `function5(countOnly)`: Returns an object with 'Items-to-find' in an array of Items.
* `function6(eqArrays)`: Returns true for equal arrays
* `function7(eqObjects)`: Returns true for equal objects.
* `function8(findKey)`: returns the first key of an object based on the given value of that prop. 
* `function9(findKeyByValue)`: Returns the key of an object based on a given value.
* `function10(flatten)`: Returns an array of items in a multi-level array system.
* `function11(head)`: Returns only the first element of an array
* `function12(letterPositions)`: Returns an array of index values of the given letter in a string.
* `function13(map)`: Returns an array of items mapped over the original array with what user whants (has to pass that as function to the 2nd argument of the map function)
* `function14(middle)`: Returns an array of items that are in the middle of the given array.
* `function15(tail)`: Returns an array with the first element taken out.
* `function16(takeUntil)`: Returns an array of items until the condition of when to stop meets. The condition needs to be passed as function to the 2nd argument of the takeUntil(arr, condition) function.
* `function17(without)`: Returns an item without the item/items that are to be removed (passed as 2nd argument to the function as an array.)