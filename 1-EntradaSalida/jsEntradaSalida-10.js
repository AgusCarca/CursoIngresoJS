/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe = txtIdImporte.value;
	importe = parseInt (importe);

	resultado = importe * 0.75

	txtIdResultado.value= resultado

	alert("El resultado con el 25% de descuento es: "+resultado)


}
