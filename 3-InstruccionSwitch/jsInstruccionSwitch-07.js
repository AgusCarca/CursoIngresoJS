function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado){
		case "Bariloche":
			alert ("Esta al oeste");
			break;
		case "Mar del plata":
			alert ("Esta al este");
			break;
		case "Cordoba":
			alert ("Esta al sur");
			break;
		default:
			alert ("Esta al norte");
			break;
	}

}//FIN DE LA FUNCIÓN