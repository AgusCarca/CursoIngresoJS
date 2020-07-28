function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
		case ("Febrero"):
			alert ("Este mes tiene 28 o 29 dias.");
			break
		case ("Abril"):
		case ("Junio"):
		case ("Septiembre"):
		case ("Noviembre"):
			alert ("Este mes tiene 30 dias");
			break;
		default:
			alert ("Este mes tiene 31 dias");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN