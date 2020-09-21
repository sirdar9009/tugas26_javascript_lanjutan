var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

for(var i = 0; i<angka.length;i++){
	if(Number.isFinite(angka[i])){
		console.log("Angka : ", angka[i], " Infinity")
	}else{
		console.log("Angka : ", angka[i], " NOT Infinity")
	}
}