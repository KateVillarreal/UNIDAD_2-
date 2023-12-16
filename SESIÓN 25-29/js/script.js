document.getElementById("demo").innerHTML = "Este es un párrafo creado desde JavaScript."

/* var i;
var texto = "";
for(i=1;i<=10;i++){ //i=i+1
    texto = texto + "<br>" + i;
    document.getElementById("demo").innerHTML = texto;  

}
*/

/*
let number = 2
let suma = 0; 
while (number <=100){
    console.log(number);
    suma = suma + number;
    number = number + 2;  
}
*/

/*
let chicasTec = ["Kiara", "Angelis", "Madeley", "Kate", "Esteisy", "Ana", "Milenka", "Daylin", "Andrea", "Carla", "María"]; 
console.log(chicasTec.length);
console.log(chicasTec.length - 1);

let pos = 0; 
let chicaABuscar = "Kate"; 
while(pos<chicasTec.length){
    //console.log(chicasTec[pos]);
    chicasTec[pos]; 
    pos = pos + 1; 

    if(chicasTec[pos]==chicaABuscar){

        console.log("Se encontró a",chicaABuscar,".","Sí está matriculada.");
        console.log("Se encuentra en la posición " + pos);
    }
}
if (chicaABuscar == "Kate") {
    console.log("Sí está matriculada en el curso.");
}
else {
    console.log("No está matriculada en el curso. Es una intrusa.");
}



function sumar (a,b){
    let resultado = a + b; 
    return resultado; 
}
let valorSuma = sumar(18,7);
console.log(valorSuma); 

function restar (a,b){
    let resultadoResta = a - b;
    return resultadoResta;
}
let valorResta = restar(20,5);
console.log(valorResta);



function numeros(){
    let number = 1
let suma = 0; 
while (number <=100){
    console.log(number);
    suma = suma + number;
    number = number + 1;
}
}
numeros()



function verificarPar(numero){
    if(numero%2==0){
        return 0;
    }
    else{
        return 1; 
    }
}*/



//CREAR UNA FUNCIÓN QUE HALLE EL CUADRADO DE UN NÚMERO
//POR PARÁMETRO SE PASARÁ UN NÚMERO 

function calcularCuadrado (numero){
    return numero**3; 

}
console.log(calcularCuadrado(5));
console.log(calcularCuadrado(10));
console.log(calcularCuadrado(20));



//CREAR UNA FUNCIÓN QUE HALLE LA POTENCIA DE UN NÚMERO ELEVADO A UNA POTENCIA N
function calcularPotencia(base, exponente){
    return Math.pow(base, exponente);
}

console.log(calcularPotencia(2,3)); //8
console.log(calcularPotencia(2,5)); //32
console.log(calcularPotencia(15,3)); //3375
console.log(calcularPotencia(10,5)); //100000



//HALLAR EL ÁREA DE UNA CIRCUNFERENCIA.
//FÓRMULA ==> = R^ x PI 
function calcularAreaCircunferencia(radio){
    var area = Math.PI*Math.pow(radio,2);
    return area;
}
var radio = 10
var area = calcularAreaCircunferencia(radio);
console.log("El área de una circunferencia de radio" + radio + "es:" + area); 



//HALLAR EL PRECIO FINAL DE UN PRODUCTO QUE TIENE UN DESCUENTO. 
function calcularPrecioFinal(precioOriginal, porcentajeDescuento){
    //Calcula el descuento
    const descuento = precioOriginal*(porcentajeDescuento/100);

    //Calcula el precio final con el descuento aplicado. 
    const precioFinal = precioOriginal - descuento; 
    return precioFinal
}
const precioOriginal = 200;
const porcentajeDescuento = 20; 
const precioFinal = calcularPrecioFinal(precioOriginal, porcentajeDescuento); 

console.log("El precio final con descuento es de: S/.",precioFinal);


//SI EL PRECIO ES MAYOR A S/100, DESCUENTO DE 15%. SI ES MAYOR A 200 DESCUENTO DE 20%
// MOSTRAR TODOS LOS DIVISORES DE UN NÚMERO (SE USA BUCLE). 







// HALLAR PROMEDIO DE EDADES.

//Definir las edades de los tres hermanos. 
const hermano1 = 25;
const hermano2 = 30;
const hermano3 = 20; 

//Función para obtener el hermano mayor. 
function hermanoMayor(edad1, edad2, edad3){
    if (edad1 > edad2 && edad1 > edad3){
        return "El hermano mayor tiene " + edad1 + " años.";
    } else if (edad2 > edad3){
        return "El hermano mayor tiene " + edad2 + " años.";
    } else {
        return "El hermano mayor tiene " + edad3 + " años."; 
    }
}

//Función para obtener el hermano menor.
function hermanoMenor(edad1, edad2, edad3){
    if (edad1 < edad2 && edad1 < edad3){
        return "El hermano menor tiene " + edad1 + " años.";
    } else if (edad2 < edad1 && edad2 < edad3){
        return "El hermano menor tiene " + edad2 + " años.";
    } else {
        return "El hermano menor tiene " + edad3 + " años."; 
    }
} 

//Función para obtener el promedio de edades. 
function promedioEdades(edad1,edad2,edad3){
    const promedio = (edad1+edad2+edad3) /3; 
    return "El promedio de edades es " + promedio + " años."
}

//Llamadas a las funciones. 
console.log(hermanoMayor(hermano1,hermano2,hermano3)); 
console.log(hermanoMenor(hermano1,hermano2,hermano3));
console.log(promedioEdades(hermano1,hermano2,hermano3)); 