let lineCount3: number = 8;
let x: number = 1;
let hi: string = '%';

while ( x < lineCount3){
    if (x % 2 === 0){
    console.log(' ' + hi + ' ' + hi + ' ' + hi + ' ' + hi );
};
if (!(x % 2 === 0)){
    console.log(hi + ' ' + hi + ' ' + hi + ' ' + hi + ' ');
};
x++;  
}
