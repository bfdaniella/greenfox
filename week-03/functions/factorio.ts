//the factorial of a number is :
// 0!=1 , 1! = 1, 2!= 2, 3! = 6 (1*2*3), 4! = 1*2*3*4 =24
export{}

function calculateFactorial(number1: number) {
    
    let half = Math.floor(number1 / 2), 
        str = '1', 
        i, j;
    
    number1 % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
    
    for (i; i <= half; i += j) {
        number1 % i === 0 ? str += ',' + i : false;
    }

    str += ',' + number1; 
    console.log(str);
    return number1;
}

calculateFactorial(10);