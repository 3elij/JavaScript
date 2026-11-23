const prompt = require("prompt-sync")();
2.15
let number1 = prompt("Input a number: ");
let number2 = prompt("Input a number: ");
console.log(`The square of the numbers are ${number1*number1} and ${number2*number2}`);
console.log(`The sum of their squares is ${number1*number1 + number2*number2}. The difference of squares is ${number1*number1 - number2*number2}`);
