function mostrar()
{
	var repeticiones;
	var contadorDePares=0;

	
	
	do {
	repeticiones=prompt("Ingrese cantidad de repeticiones.");
	repeticiones=parseInt(repeticiones);
	}while(repeticiones<1 || isNaN(repeticiones));
	

	for (var i=1;i<repeticiones;i++){
		if (i%2==0){
		alert("Numero par: "+i);
		contadorDePares++;
		}
		
	}

	alert("Cantidad de pares: "+contadorDePares);



}//FIN DE LA FUNCIÓN