/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var respuesta;
	var maximo;
	var minimo;
	var numero;
	var primeraVez;
	
	//respuesta=true;
	primeraVez=0

	do {
		numero=prompt("Ingrese un numero");
		numero = parseInt(numero);

		if (primeraVez == 0 ){
			maximo=numero;
			minimo=numero;

			primeraVez = 1;

		} 
		if(numero > maximo) {
			maximo = numero;

		} else if ( numero < minimo){
			minimo = numero;
		}

		/*} while(isNaN(numero));*/

	/*	if (primeraVez){
			primeraVez=false;

			maximo = numero;
			minimo = numero;
		} else {
			if (numero > maximo){
				maximo = numero;
			}
			if (numero<minimo){
				minimo=numero;
			}
		}*/

		respuesta=confirm("Desea continuar?");

		


	} while (respuesta==true);

	txtIdMaximo.value=maximo
	txtIdMinimo.value=minimo

}//FIN DE LA FUNCIÓN