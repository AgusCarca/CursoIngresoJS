/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

	//PUNTO A
	edadIngresada = prompt ("Ingrese su edad entre 18 y 90 años.");
	edadIngresada = parseInt(edadIngresada);

	while (!(edadIngresada >=18 && edadIngresada<=90)){
		edadIngresada = prompt ("Unicamente entre 18 y 90 años.");
	}
	
	//PUNTO B
	sexoIngresado = prompt ("Ingrese su sexo: m o f");

	while (sexoIngresado!="m"&&sexoIngresado!="f"){
		prompt ("INGRESE SU SEXO (m o f)");
	}
	
	//PUNTO C
	estadoCivilIngresado= prompt("Ingrese su estado civil: 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo.");
	while (isNaN(estadoCivilIngresado)||estadoCivilIngresado>5||estadoCivilIngresado<1){
		estadoCivilIngresado=prompt("Ingrese su estado BIEN su estado civil con 1, 2, 3 o 4.");
	}
	
	//PUNTO D
	sueldoBruto = prompt("Ingrese su suledo bruto mayor a 8000.");
	sueldoBruto = parseInt(sueldoBruto);
	while (isNaN(sueldoBruto)||sueldoBruto>8000){
		sueldoBruto = prompt("Error! el sueldo bruto debe ser mayor a 8000.");
		sueldoBruto = parseInt(sueldoBruto);
	}

	//PUNTO E
	legajo=prompt("Ingrese su numero de legajo sin ceros a la izquierda.");
	while (isNaN(legajo)||legajo<1000||legajo>9999){
		legajo=prompt("Invalido! ingrese BIEN su legajo (numero de 4 cifras sin ceros a la izquierda");

	}
	//PUNTO F
	nacionalidad=prompt("Ingrese su nacionalidad. (A-argentinos, E-extranjeros, N-nacionalizados");
	while (nacionalidad !="A" && nacionalidad !="E" && nacionalidad !="N"){
		nacionalidad = prompt("Error!, ingrese su nacionalidad con A, para argentinos, E, para extranjeros o N para nacionalizados.");
		
	}

	txtIdEdad.value=("Su edad es: ")+edadIngresada;
	txtIdSexo.value=("Su sexo es: ")+sexoIngresado;
	txtIdEstadoCivil.value=("Su estado civil es: ")+estadoCivilIngresado;
	txtIdSueldo.value=("Su sueldo bruto es: ")+sueldoBruto;
	txtIdLegajo.value=("Su legajo es: ")+legajo;
	txtIdNacionalidad.value=("Su nacionalidad es: ")+nacionalidad;









	 



}
