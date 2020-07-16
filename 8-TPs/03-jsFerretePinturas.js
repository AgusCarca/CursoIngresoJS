/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var farenheitGrado;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    farenheitGrado = (temperatura-32)* 5/9;

    alert("La temperatura en grados es: "+farenheitGrado);

	
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var gradoFarenheit;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    gradoFarenheit = (temperatura*9/5)+32;

    alert("La temperatura en Farenheit es: "+gradoFarenheit);

}
