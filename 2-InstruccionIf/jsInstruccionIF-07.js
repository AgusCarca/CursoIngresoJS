function mostrar()
{
	var edad;
	var situacion;
	situacion = estadoCivil.value;
	edad = txtIdEdad.value;

	// en el ejercicio el estadoCivil da un string, poner string
	if (edad<18 && situacion != "Soltero"){
		alert ("Es muy pequeño para no ser soltero");
	}
}