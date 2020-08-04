function mostrar()
{
	var repeticiones;
	do {
	repeticiones=prompt("Ingrese cantidad de repeticiones.");
	repeticiones=parseInt(repeticiones)
	}while(repeticiones<1 || isNaN(repeticiones));

	for (var i=0;i<repeticiones;i++){
		alert ("HOLA UTNFRA")
	}


}//FIN DE LA FUNCIÓN