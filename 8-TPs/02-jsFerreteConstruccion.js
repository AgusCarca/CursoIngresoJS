/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadAlambre;
    var perimetro;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    perimetro = (largo * 2) + (ancho *2);
    cantidadAlambre = perimetro *3;

    alert("la cantidad de alambre a comprar es: "+cantidadAlambre);

}
function Circulo () 
{
    var radio;
    var cantidadAlambre;
    var perimetro;

    radio = txtIdRadio.value
    radio = parseFloat(radio)

    perimetro = 2 * radio * Math.PI;

    perimetro = Math.ceil(perimetro);
    //console.log(perimetro);

    //console.log(perimetro.toFixed(2));
    //console.log(Math.round(perimetro));
    //console.log(Math.floor(perimetro));
    //console.log(Math.cell(perimetro));
    //console.log(parseInt(perimetro));
    cantidadAlambre = perimetro;

    alert("La cantidad de alambre necesaria es: "+cantidadAlambre);

	
}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsaCemento;
    var bolsaCal;
    var perimetro;
    var area;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    area = largo * ancho;

    bolsaCemento = area * 2;
    bolsaCal = area * 3;

    alert("Se necesita "+bolsaCal+" de cal y "+bolsaCemento+" de cemento.");

	
}