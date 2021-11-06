'use strict';
// Things are a little bit messed up here
// Your job is to decode the notSoCrypticMessage by using the hashmap as a lookup table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

//manual version for me 
console.log(hashmap[1],hashmap[12],hashmap[1],hashmap[2],hashmap[11]);
console.log(hashmap[1],hashmap[7],hashmap[11]);
console.log(hashmap[1],hashmap[49]);
console.log(hashmap[1],hashmap[3],hashmap[11]);
console.log(hashmap[1],hashmap[50],hashmap[11]);


for(let i = 0; i < notSoCrypticMessage.length;i++ ){
    console.log(hashmap[notSoCrypticMessage[""]]);

}
//console.log(out)