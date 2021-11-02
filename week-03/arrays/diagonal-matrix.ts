export{}
let matrixlenght = 4
let matrix: number [][] = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];

for(let i = 0; i <= matrixlenght; i++) {
    if(i === 0 ){
        console.log(matrix [0]);
    };
    if(i === 1){
        console.log(matrix[1]);
    };
    if (i === 2){
        console.log(matrix[2]);
    };
    if(i === matrixlenght){
        console.log(matrix[3]);
    };
}