# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dougross/lotide`

**Require it:**

`const _ = require('@dougross/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserts whether two arrays are equal or not. If the arrays are equal, it logs a success message; otherwise, it logs a failure message with details of the differences between the arrays.
* `assertEqual()`: Asserts whether two values are equal or not. If the values are equal, it logs a success message; otherwise, it logs a failure message with details of the differences between the values.
* `assertObjectsEqual()`: Asserts whether two objects are equal or not. If the objects are equal, it logs a success message; otherwise, it logs a failure message with details of the differences between the objects.
* `countLetters()`: Counts the occurrences of each letter in a given string and returns an object with the letter counts.
* `countOnly()`: Counts the occurrences of specified items in an array of items and returns an object with the item counts.
* `eqArrays()`: Compares two arrays for equality and returns a boolean indicating whether they are equal or not.
* `eqObjects()`: Compares two objects for equality and returns a boolean indicating whether they are equal or not. The comparison is done recursively for nested objects.
* `findKey()`: Finds the first key in an object that satisfies a given callback function and returns the key as a string.
* `findKeyByValue()`: Finds the key in an object that corresponds to a given value and returns the key as a string.
* `flatten()`: Flattens a nested array and returns a new array with all the elements flattened to a single level.
* `head()`: Returns the first element of an array.
* `letterPositions()`: Finds the positions of all the letters in a given string and returns an object with the letter positions.
* `map()`: Applies a callback function to each element of an array and returns a new array with the results.
* `middle()`: Returns the middle element(s) of an array. If the array has an odd length, a single middle element is returned; if the array has an even length, an array containing the two middle elements is returned.
* `tail()`: Returns a new array containing all elements of the input array except the first element.
* `takeUntil()`: Returns a new array with elements from the beginning of the input array until a callback function returns a truthy value.
* `without()`: Returns a new array with all occurrences of specified items removed from the input array.


