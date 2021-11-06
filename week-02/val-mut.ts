//variable mutations
//make it bigger by 10
let a: number = 3;
a = a + 10;
console.log(a);

// make it smaller by 7
let b: number = 100;
b = b - 7;
console.log(b);

//double c's value
let c: number = 44;
c = 2 * c;
console.log(c);

//divide d's valuse
let d: number = 125;
d = d / 5;
console.log(d);

// cube of e 
let e: number = 8;
e = e * e * e;
console.log(e);

//tell if f1 is bigger than f2 as boolean
let f1: number = 123;
let f2: number = 345;

if (f1>f2){
    console.log(true);
} else {
    console.log(false);
};

//tell if the double of g2 is bigger than g1 as boolean 
let g1: number = 350;
let g2: number = 200;
if ((g2 * 2 )> g1){
    console.log(true);
} else {
    console.log(false);
};

// tell if 11 is a divisor of h as boolean
let h: number = 1357988018575474;
h = h % 11;
if (h === 0 ){
    console.log(true);
} else {
    console.log(false);
};
let h1: number = 1357988018575474;
if (h1 % 11 === 0 ){
    console.log(true);
} else {
    console.log(false);
};

//tell if i1 is higher than 12 squared and smaller than i2 cubed as boolean
let i1: number = 10;
let i2: number = 3;
if (  i1 > ( i2 * i2 ) && i1 < (i2 * i2 * i2)) {
    console.log(true);
} else {
    console.log(false);
};

//tell if j is divisible by 3 or 5 as boolean
let j: number = 1521;

if (j % 3 === 0 ){
    console.log(true);
} else {
    console.log(false);
}
if (j % 5 === 0){
    console.log(true);
} else {
    console.log(false);
};



