let lineCount: number= 4 
let i: number = 0;



for(let i: number = 1; i <= Math.ceil(lineCount); i++){
    let twoloopsFirstHalf: string = " ".repeat (Math.ceil(lineCount)-i) + "*".repeat(i + (i-1));
    console.log(twoloopsFirstHalf);
}