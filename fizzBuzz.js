const prompt = require("prompt-sync")();
let number = prompt("Enter a number: ")
if (number%3 == 0 && number%5 ==0){
	console.log("Fizzbuzz")
}
else if (number%3 == 0){
	console.log("Fizz")
}
else if (number%5 == 0){
	console.log("Buzz")
}