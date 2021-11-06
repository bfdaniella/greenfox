
export{}
let nums = {};
console.log(nums);

let nums2 = {
    97: "a",
    98: "b",
    99: "c",
    65: "A",
    66: "B",
    67: "C",
};

console.log(nums2);

console.log(Object.keys(nums2));
console.log(Object.values(nums2));


console.log(nums2);

// add value D and key 68 is missing 

let count = 0;

// loop through each key/value
for(let key in nums2) {

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

//delete (nums2[97]);
// dont know how to delete
//delete key.value;
console.log(nums2);