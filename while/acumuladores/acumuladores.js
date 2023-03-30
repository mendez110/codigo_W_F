/*Crear un programa que muestre la multiplicación de dos cantidades. 
Use ciclo while*/

let numero = 0;
let contador = 1;
let acumuladora = 0;

while (contador <= 2) {
    numero = parseInt(prompt("Ingrese un número"));
    acumuladora = numero * numero;
    contador++
    
}
console.log(numero, " x ", numero, " = :" , acumuladora);

