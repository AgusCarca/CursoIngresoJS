/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	var flag=0;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;  /*LOS NEGATIVOS SE INICIALIZAN EN 1 PORQUE EN LA MULTIPLICACION
	NO SE PUEDE MULTIPLICAR POR 0 Y PARA MANTENER EL SIGNO NEGATIVO  */ 
	respuesta;

	
	do{
		numero = prompt("Ingrese un numero");
		numero = parseInt (numero);

		/*while (isNaN(numero)) {
			numero = prompt("Ingrese un numero");
			numero = parseInt (numero);

		}*/
		if (numero>0){

		sumaPositivos=sumaPositivos+numero;

		} else if (numero<0){
			flag = 1
			multiplicacionNegativos = multiplicacionNegativos * numero;
			
		}
		contador++;


		respuesta = confirm ("Desea continuar?");
	} while(respuesta==true);


	if (flag == 0){
		multiplicacionNegativos=0;
	}
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN