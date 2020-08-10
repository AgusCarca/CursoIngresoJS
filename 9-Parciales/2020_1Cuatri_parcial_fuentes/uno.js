
function mostrar()
{
	//Declarar variables
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var acumuladorBarbijos=0;
	var acumuladorAlcohol=0;
	var acumuladorJabon=0
	var contBarbijo=0;
	var contAlcohol=0;
	var contJabon=0;
	var precioAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var promedioCompra;
	var mayorTipo;
	var flagAlcohol = 0;
	var mensajeAlcohol = "No se compraron alcoholes";



	//Generar un bucle 5 veces (tipo,precio,cantidad, marca, fabricante) 
	//Usar for porque conozco la cantidad de repeticiones 
	for (var i =0; i<5;i++){
		tipo = prompt ("Ingrese tipo 'barbijo', 'jabon', 'alcohol'");
		while (!(tipo=='barbijo' &&tipo=='jabon'&&tipo=='alcohol')) {
			tipo = prompt ("Tipo invalido");
		}
		precio = parseInt(precio)
		precio = prompt("Ingrese el precio entre 100 y 300");
		while (!(precio>=100 && precio <=300)){
			precio = parseInt(prompt("Precio invalido"));
		}
		cantidad = parseInt(cantidad);
		cantidad = prompt ("Ingrese una cantidad maxima entre 0 y 1000");
		while (!(cantidad >0&&cantidad<=1000)){
			cantidad = parseInt (prompt("Ingrese una cantidad valida"));
		}

		marca = prompt ("Ingrese marca");
		fabricante = prompt("Ingrese el fabricante");

		switch (tipo){
			case 'alcohol':
				acumuladorAlcohol = acumuladorAlcohol+cantidad;
				contAlcohol++;
				if (flagAlcohol==0||precioAlcoholBarato>precio){
					precioAlcoholBarato=precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					flagAlcohol = 1;
				}
				break;
			case 'barbijo':
				acumuladorBarbijos = acumuladorBarbijos+cantidad;
				contBarbijo++;
				break;
			case 'jabon':
				acumuladorJabon = acumuladorJabon+cantidad;
				contJabon++;
				break;
		}
	}
	if (acumuladorAlcohol>acumuladorBarbijos && acumuladorAlcohol>acumuladorJabon){
		mayorTipo = "alcohol";
		promedioCompra = acumuladorAlcohol/contAlcohol;

	} else if ( acumuladorBarbijos>acumuladorAlcohol && acumuladorBarbijos>=acumuladorJabon){
		mayorTipo = "barbijo";
		promedioCompra = acumuladorBarbijos/contBarbijo;
	} else {
		mayorTipo ="jabon";
		promedioCompra = acumuladorJabon/contJabon;

	}

	if (contAlcohol!=0){
		mensajeAlcohol = "Fabricante alcohol barato: "+fabricanteAlcoholBarato+
			"\nCantidad: "+cantidadAlcoholBarato+
			"\nPrecio: "+precioAlcoholBarato;
	}

	
	



}
