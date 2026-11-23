const prompt = require("prompt-sync")();
//2.14
// line = ""
// for(let i =1; i<=4;i++){
	// line = line+ i+ " "
// }
// console.log(line)

//2.15
// let number1 = prompt("Input a number: ");
// let number2 = prompt("Input a number: ");
// console.log(`The square of the numbers are ${number1*number1} and ${number2*number2}`);
// console.log(`The sum of their squares is ${number1*number1 + number2*number2}. The difference of squares is ${number1*number1 - number2*number2}`);

// let number3 = prompt("Input a number")
// let squared = number3*number3
// if (squared > 100 && number3 > 100){
	// console.log("The number and its square are greater than 100")
// }

2.18 
// console.log(`*********     ***       *        *
// *       *    *   *     ***      * *
// *       *   *     *   *****    *   *
// *       *   *     *     *     *     *
// *       *   *     *     *    *       *
// *       *   *     *     *     *     *
// *       *   *     *     *      *   *
// *       *    *   *      *       * *
// *********     ***       *        *`);

// let max = 0
// let min = 10000000000
// for(let i = 1; i <=10; i++){
	// let number = prompt("Input a number: ")
	// if (max < number){
		// max = number
	// }
	// if (min > number){
		// min = number
	// }
// }
// console.log(`The bigest number is ${max} and the smallest is ${min}`)

// let number = prompt("Input a number: ")
// if (number%3 == 0){
	// console.log("Multiple of 3")
// }

// let num1 = prompt("Input a number: ")
// let num2 = prompt("Input another number: ")
// let num3 = num1*3
// if (num3%num2 == 0){
	// console.log("True")
// }
// else{
	// console.log("False")
// }

// for(let i = 1; i <=7; i++){
	// row = ""
	// for(let columns = 1; columns <=i;columns++){
		// row = row+"*"
	// }
	// console.log(row)

// let number = prompt("Input a number: ")
// spaced = ""
// while(number!=0){
	// spaced = (number%10)+" "+spaced
	// number = Math.floor(number/10)
// }
// console.log(spaced)

let limit = prompt("Input the limit: ")
console.log("number   square   cube")
for(let i = 1; i<=limit;i++){
	console.log(`${i}          ${i*i}       ${i*i*i}`)
}


	

