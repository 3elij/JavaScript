const prompt = require("prompt-sync")();
let max = 0
let min = 10000000000
for(let i = 1; i <=10; i++){
	let number = prompt("Input a number: ")
	if (max < number){
		max = number
	}
	if (min > number){
		min = number
	}
}
console.log(`The bigest number is ${max} and the smallest is ${min}`)
