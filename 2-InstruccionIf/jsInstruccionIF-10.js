function mostrar()
{
//	var numeroRandom;

//	numeroRandom = Math.floor (Math.random () * (11 - 1)) + 1;

//	if (numeroRandom >= 9){
//		alert(numeroRandom + " EXCELENTE");
//	} else {
//		if (numeroRandom >=4){
//			alert(numeroRandom + " APROBO");		
//		} else {
//			alert (numeroRandom + " Vamos, la proxima se puede");
//		}
//	}

	var numeroRandomUno;
	var numeroRandomDos;

	numeroRandomUno = Math.floor (Math.random () * (51 - 1)) + 1;
	numeroRandomDos = Math.floor (Math.random () * (51 - 1)) + 1;

	if (numeroRandomUno % 2 ==0 && numeroRandomDos % 2 ==0){
		alert (numeroRandomUno*numeroRandomDos);
	} else {
		alert (numeroRandomUno-numeroRandomDos);
	}
		
	if (numeroRandomUno % 2==0 && numeroRandomDos %5==0){
		alert (Math.pow(numeroRandomDos,3));
	}
	if (numeroRandomUno % 2==0 && numeroRandomDos %2 ==1) {
		alert ("No paso nada");
	}
		
	console.log (numeroRandomUno);
	console.log (numeroRandomDos);
}
