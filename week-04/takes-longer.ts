'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";
let new2: string = "always takes longer than"
let cutQuote = quote.slice(21);
//console.log(cutQuote)
let cutFirst = quote.substring(0,21);
//console.log(cutFirst);

console.log((cutFirst.concat(new2))+cutQuote);





//quote = new2.concat(cutFirst);

//console.log(quote);




//console.log(quote);