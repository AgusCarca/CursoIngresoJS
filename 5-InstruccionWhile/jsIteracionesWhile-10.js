/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioNegativo=0;
	var promedioPositivo=0;
	var diferencia=0;

	while (respuesta) {
			numeroIngresado = prompt ("Ingrese numero");
			numeroIngresado = parseInt(numeroIngresado);

			if(isNaN(numeroIngresado)){
				continue;
			}
			
			else if (numeroIngresado > -1){
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;

				if (numeroIngresado==0){
					contadorCeros++;
				}

				else {
					sumaNegativos = sumaNegativos + numeroIngresado;
					contadorNegativos++;
				}
				if (numeroIngresado%2==0){
					contadorPares++;
				}

			}
			respuesta=confirm("Desea continuar?");

		}
		if(contadorPositivos>0){
			promedioPositivo=sumaPositivos/contadorPositivos;

		}else{
			promedioPositivo = "No hay numeros positivos.";
		}

		if(contadorNegativos>0){
			promedioNegativo=sumaNegativos/contadorNegativos;
		
		}else{
			promedioNegativo = "No hay numeros negativos."
		}
		diferencia = sumaPositivos - sumaNegativos;

		document.write("</br>La suma números de negativos es : "+sumaNegativos+ 
		"</br>La suma de números positivos es: "+sumaPositivos+
		"</br>La cantidad de números positivos es: "+contadorPositivos+
		"</br>La cantidad de números negativos es: "+contadorNegativos+
		"</br>La cantidad de ceros es: "+contadorCeros+
		"</br>La cantidad de números pares es: "+contadorPares+
		"</br>El promedio de los positivos es: "+promedioPositivos+
		"</br>El promedio de los negativos es: "+promedioNegativos+
		"</br>La diferencia entre positivos y negativos es: "+diferencia);
	

	



	

}//FIN DE LA FUNCIÓN