let lineCount3: number = 8;
let x: number = 1;
let hi: string = "%";
//manual 
while ( x < lineCount3){ 
    if (x % 2 === 0){
    console.log(' ' + hi + ' ' + hi + ' ' + hi + ' ' + hi );
};
if (!(x % 2 === 0)){
    console.log(hi + ' ' + hi + ' ' + hi + ' ' + hi + ' ');
};
x++;  
}

/*let n = 8
let string = "";

for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }

  string += "\n";
}
console.log(string);*/