const prompt = require("prompt-sync")();
let number = prompt("Input a number: ")
if (number%3 == 0){
	console.log("Multiple of 3")
}