function mostrar()
{

	var repeticiones;
	var contadorDeDivisores=0;

	
	
	do {
	repeticiones=prompt("Ingrese cantidad de repeticiones.");
	repeticiones=parseInt(repeticiones);
	}while(repeticiones<1 || isNaN(repeticiones));
	

	for (var i=1;i<repeticiones;i++){
		if (repeticiones%i==0){
		alert("Numero divisorios: "+i);
		contadorDeDivisores++;
		}
		
	}

	alert("Cantidad de divisores: "+contadorDeDivisores);

}//FIN DE LA FUNCIÓN