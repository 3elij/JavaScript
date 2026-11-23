const prompt = require("prompt-sync")();
let negativeCounter= 0
let positiveCounter = 0
let zeroCounter = 0
for(let counter = 1; counter<=5;counter++){
	let number= prompt("Input a number: ")
	if (number > 0){
		positiveCounter++
	}
	if (number < 0){
		negativeCounter++
	}
	if (number == 0){
		zeroCounter++
	}
}
console.log(zeroCounter)
console.log(negativeCounter)
console.log(positiveCounter)