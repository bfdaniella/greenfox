let lineCount1: number = 6;
let hello: string = "";

/*console.log('a','\xa0\ ','a'); - manual
if(lineCount1 = lineCount1){
    console.log('%%%%%%');
}
while ( i < lineCount1) {
    console.log(hello,'\xa0\ ', hello);
    i++
}
if(lineCount1 = lineCount1){
    console.log('%%%%%%');
}*/

for(let i = 0; i < lineCount1; i++) { 
    for(let j = 0; j < lineCount1; j++) { 
      if(i === 0 || i === lineCount1 - 1) {
        hello += "*";
      }
      else {
        if(j === 0 || j === lineCount1 - 1) {
          hello += "*";
        }
        else {
          hello += " ";
        }
      }
    }
   
    hello += "\n";
  }
  
  console.log(hello);