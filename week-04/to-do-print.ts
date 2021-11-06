'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = '- Buy milk\n';
let todoText2: string = ' - Download games\n';
let todoTextie: string = "My todo:\n ";
let diablo: string = "    - Diablo";

todoText2 = todoText2.concat(diablo);
todoText = todoText.concat(todoText2);
todoTextie = todoTextie.concat(todoText);
todoText = todoTextie; 

console.log(todoText);
