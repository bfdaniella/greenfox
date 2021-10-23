// Surface area : 600 - 2*(a*b)+2*(b*c)+2*(a*c)  
// Volume : 1000  - a * b * c ( lenght * height * weight)
// 20 10 5 
let a: number = 20;
let b: number = 10;
let c: number = 5;
let sa: number = 0 ;
let v: number = 0;

sa= (2 * (a * b) + 2 * (a * c) + 2 *(b * c ));
v = a * b * c;
console.log('Surface Area:', sa);
console.log('Volume:',v);
