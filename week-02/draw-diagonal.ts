let lineCount2: number = 6;
let hallo: string = "";
let hillo: string = '%%'

/*console.log('a','\xa0\ ','a');- manual */ 
/*if (lineCount2 = lineCount2){
    console.log('%%%%%%');
}
if ( l < 3) {
    console.log (hillo + '\xa0\  '+ hallo);
    l++;
}
if( l++ < lineCount2){
    console.log(hallo + ' ' + hallo + '  ' + hallo);
}
if (lineCount2 - 2 ){
    console.log(hallo + '  ' + hallo + ' ' + hallo);
}
if(lineCount2 - 1){
    console.log(hallo + '\xa0\  ' + hillo);
}
if (lineCount2 = lineCount2){
    console.log('%%%%%%');
}*/


for (let i = 1; i <= lineCount2; i++) {
  // printing star
  
  for (let j = 0; j < i; j++) {
    
    if(i === lineCount2) {
      hallo += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        hallo += "*";
      }
      else {
        hallo += " ";
      }
    }
  }
  hallo += "\n";
}
console.log(hallo);