/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var contador = 0;
	var claveIngresada;
	claveIngresada = prompt("Ingrese la clave.");

	while (claveIngresada !="utn750") {
		contador++;

		if (contador ==3){
			alert ("Ya no tiene mas intentos.");
			break;
		}
		claveIngresada = prompt("Ingrese la clave.");
	}
	
}//FIN DE LA FUNCIÓN
