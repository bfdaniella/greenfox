let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 43;
// print the remaining econd as an integer from a day 
// 14:34:43 

let remainingHours: number = 24;
let remainingMinutes: number = 60;
let remainingSeconds: number = 60;


remainingHours = remainingHours - currentHours;
remainingMinutes = remainingMinutes - currentMinutes;
remainingSeconds = remainingSeconds - currentSeconds;

console.log(remainingHours,':',remainingMinutes,':',remainingSeconds);

remainingSeconds = (remainingSeconds + 60 * remainingMinutes + 60 * remainingHours * 60);
console.log(remainingSeconds,'seconds');

