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