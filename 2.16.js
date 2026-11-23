const prompt = require("prompt-sync")();
let number3 = prompt("Input a number")
let squared = number3*number3
if (squared > 100 && number3 > 100){
	console.log("The number and its square are greater than 100")
}