
// task : add all the number under the given number e.g : input 5 , then it has to add 1+2+3+4+5
/*function sum(number2: number, number3 : number) : number {
    return number2 + number3;
};

console.log(sum(2,3));*/



function sum1 (num: number){
    let i: number = 0
    for ( let i = 0; i <= num; i ++) {
         i += i;
         return i;
    } ;
        
};
console.log(sum1(4)); 

