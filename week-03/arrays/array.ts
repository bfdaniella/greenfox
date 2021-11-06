// Spread syntax 
const evens = [ 2,4,6,8];
const numbers = [1,3,5,7, ...evens];
console.log(numbers);

console.log('-------');

//concentration two arrays
let arr1 = [ 0, 1, 2];
let arr2 = [ 3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);

console.log('-------');

//array methods
console.log(['apple', 'pear', 'melon'].indexOf('pear'));
//print on which index pearl is -> 1 

console.log('-------');

['apple', 'pear', 'melon'].forEach(function(e, i) {
    console.log(e, i)
});
//print which fruit stands on which index 

console.log('-------');

let triples = [1, 2, 3, 4, 5].map(function(e) {
    return e * 3
});
console.log(triples); 
// print the triple of every number

console.log('-------');

let evens2 =[1, 2, 3, 4, 5].filter(function(e) {
    return e % 2 == 0;
});
console.log(evens2);
//prints only the even numbers 

console.log('-------');

let isAllEven = [2, 6, 14, 5, 4].every(function(e) {
    return e % 2 == 0;
});
console.log(isAllEven);
//print false - print if all the number are even or not 

console.log('-------');

let isAnyEven =[2, 6, 14, 5, 4].some(function(e) {
    return e % 2 == 0;
});
console.log(isAnyEven);
//prints if there is any even in the row 

console.log('-------');

let letters ='apple'.split('');
console.log(letters);
console.log(letters.join('@'));
// split the letters one by one 
// a@p@p@l@e - the solution 


