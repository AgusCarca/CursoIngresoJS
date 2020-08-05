//Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
//Tipo validad("arena";"cal";"cemento")
//Cantidad de bolsas,
//Precio por bolsa (más de cero ),
//al terminar la compra el cliente accede a un descuento segun las bolsas en total
//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
//a) El importe total a pagar , bruto sin descuento y...
//b) el importe total a pagar con descuento(solo si corresponde)
//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
//f) El tipo mas caro

function mostrar()
{
  var item;
  var cantidad;
  var respuesta;
  var cantidadBolsas=0;
  var tipoBolsaMaxima;
  var precioBolsa;
  var acumuladorPrecioBruto=0;
  var acumuladorCantidadBolsa=0;
  var descuento=1;
  var precioConDescuento;
  var tipoDeBolsas;
  var precioMaximo=0;

  
  
  do {
    do{
    item=prompt("Ingrese item");
    } while(!(item=="arena"||item=="cal"||item=="cemento")){
      item=("Reingrese el item");

    }
    do{
    cantidad=prompt("Ingrese cantidad");
    } while(isNaN(cantidad)){
      cantidad=prompt("Reingrese la cantidad");
    }
    do{
    precioBolsa=prompt("Ingrese precio");
    precioBolsa=parseInt(precioBolsa);
    } while(isNaN(precioBolsa)||precioBolsa<0){
      precioBolsa=prompt("Reingrese el precio");
    }

        acumuladorPrecioBruto += precioBolsa * cantidad;

    acumuladorCantidadBolsa += cantidad;

    respuesta=confirm("Desea continuar?");




  }while(respuesta);

  //A

  console.log ("El precio bruto es: "+acumuladorPrecioBruto);

  //B
  if(acumuladorCantidadBolsa>10 && acumuladorCantidadBolsa<30){
    descuento = 0,15;
  } else if (acumuladorCantidadBolsa>30){
    descuento = 0.25;
  }

    precioConDescuento = acumuladorPrecioBruto * descuento;
  console.log ("El precio con descuento es: "+precioConDescuento);

  //D
  console.log("El tipo de bolsa maxima es: "+tipoDeBolsas);

  //E
  if(precioBolsa > precioMaximo){
    precioMaximo
  }



    
}
