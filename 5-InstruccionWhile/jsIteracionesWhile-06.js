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

		/*while(isNaN (numeroIngresado)){
			numeroIngresado= prompt("Ingrese un numero");
			numeroIngresado= parseInt (numeroIngresado);
		}*/

		acumulador=acumulador+numeroIngresado;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

	/*
	SIN WHILE-----

	var numero1;
	var numero2;
	var numero3;
	var numero4;
	var numero5;
	var suma;
	var promedio;

	numero1 = parseInt(prompt ("Ingrese un numero"));
	numero2 = parseInt(prompt ("Ingrese un numero"));
	numero3 = parseInt(prompt ("Ingrese un numero"));
	numero4 = parseInt(prompt ("Ingrese un numero"));
	numero5 = parseInt(prompt ("Ingrese un numero"));
	suma = numero1+numero2+numero3+numero4+numero5;
	promedio = suma/5

	txtIdSuma.value=suma;
	txtIdPromedio.value=promedio;



	*/
}