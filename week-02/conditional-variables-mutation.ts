// is a is even increment output1 by one 
let a: number = 24;
let output1: number = 0;
if (a / 2 ){
    console.log(output1 + 1);
};

console.log("-------")
let b: number = 13;
let output2: string = '';
if ( b  > 10 && b < 20 ){
    console.log("Sweet!");
} else if (b < 10){
    console.log("Less!");
}else if (b > 20){
    console.log("More!");
};

console.log("-------")

let c: number = 123;
let credits: number= 100;
let isBonus: boolean = false;
if ( credits >= 50 && !isBonus){
    console.log(c+2);
} else if ( credits < 50 && !isBonus){
    console.log(c + 1);
} 
// dont write anything if isBonus is there

let d: number = 8;
let time: number = 120;
let output3: string = '';
if (d % 8 === 0 && time < 200 ){
     output3 = 'check';
} else if ( time > 200){
    output3 = 'Time out';
} else{
    output3 = 'Run Forest Run!';
};
console.log(output3);

// how to set string in every otuput differently ? 