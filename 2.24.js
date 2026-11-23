const prompt = require("prompt-sync")();
let number = prompt("Input a number: ")
spaced = ""
while(number!=0){
	spaced = (number%10)+" "+spaced
	number = Math.floor(number/10)
}
console.log(spaced)