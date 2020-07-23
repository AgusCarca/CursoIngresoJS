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
	var resultado;

	numeroRandomUno = Math.floor (Math.random () * (51 - 1)) + 1;
	numeroRandomDos = Math.floor (Math.random () * (51 - 1)) + 1;

	if (numeroRandomUno % 2 ===0 && numeroRandomDos % 2 ===0){
		resultado = numeroRandomUno*numeroRandomDos;
		alert ("Los numeros se multiplicaron: "+resultado)
	} else { 
		if (numeroRandomUno % 2 ==1 && numeroRandomDos % 2 ==1){
			resultado = numeroRandomUno-numeroRandomDos;
			alert ("Los numeros se restaron; "+resultado);
			}
	}
	if (numeroRandomDos %5==0 || numeroRandomDos %5==0){
		resultado = Math.pow(numeroRandomDos,3)
		alert ("El numero se elevo al cubo: "+resultado);
	}
	if (numeroRandomUno % 2==1 && numeroRandomDos %2 ==0 || numeroRandomUno % 2==0 && numeroRandomDos% 2==1) {
		resultado = "nada"
		alert ("No paso "+resultado);
	}
		
	console.log (numeroRandomUno);
	console.log (numeroRandomDos);
}
