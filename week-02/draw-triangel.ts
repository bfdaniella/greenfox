let lineCount: number = 4;
let s: string = "";

  /* console.log('*'); -manual
    if(i+1){
        console.log('**');
    }
    if(i+2){
        console.log('***');
    }
    if(i+3){
        console.log('****' );
    };
    
    
} */
//right triangle 
for (let i = 1; i <= lineCount; i++) {
  // printing spaces
  for (let j = 0; j < lineCount - i; j++) {
    s += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

//left triangle 


for (let i = 1; i <= lineCount; i++) {
  for (let j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);