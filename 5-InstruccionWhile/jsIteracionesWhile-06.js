function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador <5) {
		contador++;

		numeroIngresado = prompt("Ingrese el numero");

		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN (numeroIngresado)){
			numeroIngresado= prompt("Ingrese un numero");
			numeroIngresado= parseInt (numeroIngresado);
		}

		acumulador=acumulador+numeroIngresado;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}