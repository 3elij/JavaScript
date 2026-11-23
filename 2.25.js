const prompt = require("prompt-sync")();
let limit = prompt("Input the limit: ")
console.log("number   square   cube")
for(let i = 1; i<=limit;i++){
	console.log(`${i}          ${i*i}       ${i*i*i}`)
}
