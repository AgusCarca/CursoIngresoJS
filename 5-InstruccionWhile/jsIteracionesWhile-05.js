/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (!(sexoIngresado=="f"||sexoIngresado=="m")){
		sexoIngresado=prompt("INGRESE SU SEXO");

////if (sexoIngresado =="f") {
//////txtIdSexo.value=("Su sexo es: femenino");
////} else {
//////if (sexoIngresado =="m"){
////////txtIdSexo.value=("Su sexo es: masculino")
//////}
//////
////}
	}

	txtIdSexo.value=("Se sexo es: ")+sexoIngresado;


	
}//FIN DE LA FUNCIÓN