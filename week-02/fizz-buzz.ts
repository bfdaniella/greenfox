
let i: number = 1;
while (i < 101){
    if (!(i % 3 === 0) && !(i % 5 ===0)){
        console.log(i);
    }
    if(i % 3 === 0 ){
        console.log('Fizz');
    };
    if (i % 5 === 0 ){
        console.log('Buzz');
    }
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }
    ;
    i++;
}
