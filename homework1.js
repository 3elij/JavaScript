const prompt = require("prompt-sync")();
/*for(let i = 1; i <=7; i++){
	row = ""
	for(let columns = 1; columns <=i;columns++){
		row = row+"#"
	}
	console.log(row)
}
let number = prompt("Enter a number: ")
if (number%3 == 0 && number%5 ==0){
	console.log("Fizzbuzz")
}
else if (number%3 == 0){
	console.log("Fizz")
}
else if (number%5 == 0){
	console.log("Buzz")
}*/

let rows = prompt("How many rows do you want: " )
for(let j =1; j <= rows; j++){
	let hash = ""
	if (j%2 == 0){
		for (let columns = 1; columns <= rows; columns++){
			hash = hash+"# "
		}
		console.log(hash)
	}
	else{
		for (let columns1 = 1; columns1 <= rows; columns1++){
			hash = hash+" #"
		}
		console.log(hash)
	}
}
	