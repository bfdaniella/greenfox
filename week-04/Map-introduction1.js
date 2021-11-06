"use strict";
exports.__esModule = true;
var nums = {};
console.log(nums);
var nums2 = {
    97: "a",
    98: "b",
    99: "c",
    65: "A",
    66: "B",
    67: "C"
};
console.log(nums2);
console.log(Object.keys(nums2));
console.log(Object.values(nums2));
console.log(nums2);
// add value D and key 68 is missing 
var count = 0;
// loop through each key/value
for (var key in nums2) {
    // increase the count
    ++count;
}
console.log(count);
console.log(nums2[99]);
/*let indexedArray1: {[key: string]: number} = {
    foo: 123,
    bar: 456
    }
    console.log(indexedArray1['foo'])
    console.log(indexedArray1.foo)*/
delete (nums2[97]);
console.log(nums2);
