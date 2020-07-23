/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var tipoDeLampara
     var cantidad
     var precioDescuento
     var precio

     cantidad = txtIdCantidad.value
     tipoDeLampara = Marca.value
     precioDescuento = txtIdprecioDescuento.value
     precio = 35

    // PUNTO A
     if (cantidad >=6) {
        alert ("Precio al 50%: "+((cantidad * precio) * 50)/100);
        txtIdprecioDescuento.value = (cantidad * precio) * 50/100;
     //PUNTO B
     } else if (cantidad == 5 && tipoDeLampara == "ArgentinaLuz"){
         alert ("Precio de descuento del 40%: "+(cantidad * precio) *40/100);
         txtIdprecioDescuento.value = (cantidad * precio) * 40/100;
     } else if (cantidad == 5 && tipoDeLampara != "ArgentinaLuz"){
             alert("Precio con descuento del 30%: "+(cantidad * precio) * 30/100);
             txtIdprecioDescuento.value = (cantidad * precio) * 30/100;
     // PUNTO C
     } else if (cantidad == 4 && tipoDeLampara == "ArgentinaLuz"|| cantidad==4 && tipoDeLampara == "FelipeLamparas"){
         alert ("Precio de descuento del 25%: "+(cantidad * precio) *25/100);
         txtIdprecioDescuento.value = (cantidad * precio) * 25/100;
     } else if (cantidad == 4 && tipoDeLampara != "ArgentinaLuz" && tipoDeLampara != "FelipeLamparas"){
            alert ("Precio con descuento del 20%: "+(cantidad * precio)*20/100);
            txtIdprecioDescuento.value = (cantidad * precio) * 20/100;
     // PUNTO D
     } else if (cantidad ==3 && tipoDeLampara =="ArgentinaLuz"){
         alert ("Precio con descuento del 15%: "+(cantidad * precio)*15/100);
         txtIdprecioDescuento.value = (cantidad * precio) * 15/100;
     } else if (cantidad ==3 && tipoDeLampara == "FelipeLamparas"){
             alert("Precio con descuento del 10%: "+(cantidad * precio) * 10/100);
             txtIdprecioDescuento.value = (cantidad * precio)*10/100;
     } else if (cantidad ==3 && tipoDeLampara != "ArgentinaLuz" && tipoDeLampara != "FelipeLamparas"){
                alert ("Precio con descuento del %5: "+ (cantidad*precio)*5/100);
     // PUNTO E           
     } else if (precioDescuento >120) {
        precioDescuento = precioDescuento * 1.1;
        alert ("Usted pago "+precioDescuento+" de IIBB.");
    }
     


}

//function CalcularPrecio () 
//{
//   var tipoDeLampara
//   var cantidad
//     var precioDescuento
//     var precio

//     cantidad = txtIdCantidad.value
//     tipoDeLampara = Marca.value
//     precioDescuento = txtIdprecioDescuento.value
//     precio = 35

    // PUNTO A
//   if (cantidad >=6) {
//      alert ("Precio al 50%: "+((cantidad * precio) * 50)/100);
//      txtIdprecioDescuento.value = (cantidad * precio) * 50/100;
//   }
    // PUNTO B 
//   if (cantidad == 5 && tipoDeLampara == "ArgentinaLuz"){
//       alert ("Precio de descuento del 40%: "+(cantidad * precio) *40/100);
//       txtIdprecioDescuento.value = (cantidad * precio) * 40/100;
//   } else {
//       if (cantidad == 5 && tipoDeLampara != "ArgentinaLuz"){
//           alert("Precio con descuento del 30%: "+(cantidad * precio) * 30/100);
//           txtIdprecioDescuento.value = (cantidad * precio) * 30/100;
//       }
//     }
    // PUNTO C
//   if (cantidad == 4 && tipoDeLampara == "ArgentinaLuz"|| cantidad==4 && tipoDeLampara == "FelipeLamparas"){
//       alert ("Precio de descuento del 25%: "+(cantidad * precio) *25/100);
//       txtIdprecioDescuento.value = (cantidad * precio) * 25/100;
//   } else {
//       if (cantidad == 4 && tipoDeLampara != "ArgentinaLuz" && tipoDeLampara != "FelipeLamparas"){
//          alert ("Precio con descuento del 20%: "+(cantidad * precio)*20/100);
//          txtIdprecioDescuento.value = (cantidad * precio) * 20/100;
//         }
//    }
       
    // PUNTO D
//   if (cantidad ==3 && tipoDeLampara =="ArgentinaLuz"){
//       alert ("Precio con descuento del 15%: "+(cantidad * precio)*15/100);
//       txtIdprecioDescuento.value = (cantidad * precio) * 15/100;
//     } else {
//         if (cantidad ==3 && tipoDeLampara == "FelipeLamparas"){
//             alert("Precio con descuento del 10%: "+(cantidad * precio) * 10/100);
//             txtIdprecioDescuento.value = (cantidad * precio)*10/100;
//       } else {
//           if (cantidad ==3 && tipoDeLampara != "ArgentinaLuz" && tipoDeLampara != "FelipeLamparas"){
//              alert ("Precio con descuento del %5: "+ (cantidad*precio)*5/100);
//           }
//           
//         }
//     }
    
    // PUNTO E
//    if (precioDescuento >=120) {
//        precioDescuento = precioDescuento * 1.1;
//        alert ("Usted pago "+precioDescuento+" de IIBB.");
//    }
     


//}