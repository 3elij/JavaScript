const prompt = require("prompt-sync")();
let num1 = prompt("Input a number: ")
let num2 = prompt("Input another number: ")
let num3 = num1*3
if (num3%num2 == 0){
	console.log("True")
}
else{
	console.log("False")
}