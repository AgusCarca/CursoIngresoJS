function mostrar()
{
	var edad;
	var situacion;
	situacion = estadoCivil.value;
	edad = txtIdEdad.value;

	
	if (edad >= 18 && situacion == "Soltero"){
		alert ("Es soltero y no es menor");
	}
}