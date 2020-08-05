
function mostrar()
{

	var item;
	var cantidad;
	var fabricante;
	var flagJabon = 0;
	var precioMayorJabon;
	var precioMayorJabonCantidad;
	var precioMayorJabonFabricante;
	var promedioMasUnidades;
	var cantidadTotalBarbijo = 0;
	var contadorGeneral = 0;
	var acumuladorCantidadesAlcohol=0;
	var acumuladorCantidadesJabon=0;
	var acumuladorCantidadesBarbijo=0;


	for (i = 0; i < 5; i++) {

		//ENTRADA
		item=prompt("Por favor ingrese item");
		while (!(item == "barbijo" || item == "jabon" || item == "alcohol")){
			item=prompt("Por favor reingrese item");
			
		}

		cantidad=parseInt(prompt("Por favor ingrese cantidad"));
		while (isNaN(cantidad) || cantidad < 0 && cantidad > 1000){
			cantidad=parseInt(prompt("Por favor reingrese cantidad"));
		}

		precio=parseInt(prompt("Por favor ingrese precio"));
		while (isNaN(precio)|| precio < 100 && precio > 300){
			precio=prompt("Por favor reingrese precio");
		}

		fabricante=prompt("Por favor ingrese fabricante");
		while (!(isNaN(fabricante))){
			fabricante=prompt("Por favor reingrese fabricante ");
		}
		//-------------------------------------------------------------------------------
		//a) Del más caro de los jabon, la cantidad de unidades y el fabricante
		if (item == "jabon" && flagJabon == 0 || precio > precioMayorJabon){
			precioMayorJabon =  precio;
			precioMayorJabonCantidad = cantidad;
			precioMayorJabonFabricante = fabricante;
			flagJabon = 1;
		}
		
		//b) Del tipo de producto con mas unidades en total de la compra, el promedio por compra
		switch(item){
			case "alcohol":
				acumuladorCantidadesAlcohol+=cantidad;
				break;
			case "barbijo":
				acumuladorCantidadesBarbijo+=cantidad;
				break;
			case "jabon":
				acumuladorCantidadesJabon+=cantidad;
				break;
		}
		if (acumuladorCantidadesAlcohol>acumuladorCantidadesBarbijo
			&& acumuladorCantidadesAlcohol >acumuladorCantidadesJabon){
				promedioMasUnidades=acumuladorCantidadesAlcohol/5;

			}else if (acumuladorCantidadesBarbijo>acumuladorCantidadesJabon) {
				promedioMasUnidades=acumuladorCantidadesBarbijo/5;

			}else{
				promedioMasUnidades=acumuladorCantidadesJabon/5;

			}

		
		//C	
		if (item == "barbijo"){
			cantidadTotalBarbijo = cantidadTotalBarbijo + cantidad;
		}
		contadorGeneral++;
	}//fin del while

	//Mostrar por pantalla
	document.write
	(
	"a) Del más caro de los jabones, la cantidad de unidades y el fabricante: "+"<br>"+
	"Cantidad de Unidades: "+precioMayorJabonCantidad+"<br>"+
	"Nombre de fabricante: "+precioMayorJabonFabricante+"<br>"+
	"b) Del ítem con más unidades, el promedio: "+promedioMasUnidades+"<br>" +
	"c) Cuántas unidades de barbijo hay en total: "+cantidadTotalBarbijo
	)
	
}
