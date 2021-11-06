/*function greenFoxAlert(){
    alert('Hello Green Fox');
}

greetFoxAlert();

function greenFoxLog(){
    console.log('Hello Green Fox')
}
greetFoxLog();*/

//Function arguments

function greetByName (name: string) {
    console.log(arguments);
    console.log('Well hi there, ', name);
}
greetByName('Tojas');
greetByName('Barbi');

//default values for function arguments

function greet (greet = 'hi', name = 'pal' ){
    console.log(greet, name);
}
greet('Hey');
greet('Hello', 'Tojas');

//Function return values 

function makeGreen(name1: string) : string {
    let newName =`Green ${name1}`;
    return newName;
}
let name1 = makeGreen ('Tojas');
greetByName ('Whazzup',);
