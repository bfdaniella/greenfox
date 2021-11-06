let lineCount: number= 7
let i: number = 1;



for(let i: number = 1; i <= Math.ceil(lineCount / 2); i++){
    let twoloopsFirstHalf: string = " ".repeat (Math.ceil(lineCount / 2)-i) + "*".repeat(i + (i-1));
    console.log(twoloopsFirstHalf);
}
for ( let j: number = Math.floor(lineCount / 2); j >= 1; j--){
    let twoLoopsSecondHalf: string = " ".repeat(Math.ceil(lineCount / 2) -j) + "*".repeat(j + (j-1));
    console.log(twoLoopsSecondHalf);
}