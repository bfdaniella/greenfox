export{}

let nameToGreet = 'Green Fox';
function greet(greet = 'Greetings dear', name = nameToGreet){
    console.log(greet, name)
}

greet();