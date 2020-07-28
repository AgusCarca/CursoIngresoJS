function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino =txtIdDestino.value;
	var precio = 15000
	
	switch (estacionIngresada){
		case "Invierno":
			switch (destino){
				case "Bariloche":
					alert ("Bariloche tiene un aumento del 20%: "+((precio*20/100)+precio)+"$");
					break;
				case "Mar del plata":
					alert ("Mar del plata tiene un descuento del 20%: "+(precio-(precio*20/100))+"$");
					break;
				default:
					alert ("Tiene un descuento del 10%: "+(precio-(precio*10/100))+"$");
					break;
							
			}
			break;
		case "Verano":
			switch (destino){
				case "Bariloche":
					alert ("Bariloche tiene un descuento del 20%: "+(precio-(precio*20/100))+"$");
					break;
				case "Mar del plata":
					alert ("Mar del plata tiene un aumento del 20%: "+((precio*20/100)+precio)+"$");
					break;
				default:
					alert ("Tiene un aumento del 10%: "+((precio*10/100)+precio)+"$");
					break;
			}
			break;
		default:
			switch (destino){
				case "Cordoba":
					alert ("Cordoba tiene el precio sin descuento: 15000$");
					break;
				default:
					alert ("Tiene un aumento del 10%"+((precio*10/100)+precio)+"$");
					break;
			}
			break;
	}

}//FIN DE LA FUNCIÓN