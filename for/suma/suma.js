/* Cree un programa que calcula la suma de los primeros n números naturales. 
Use ciclo for*/

let num = parseInt(prompt("Ingrese un número"));
let acumulador =0;

for (let index = 0; index <= num; index++) {
    acumulador = acumulador + index;
}
console.log("La suma de los primeros "+num+" números es: "+acumulador);
