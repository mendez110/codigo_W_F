//Cree un programa que calcula la suma de los primeros n números naturales.

let num = parseInt(prompt("Ingrese un número"));

let contador =1;
let acumulador =0;

while (contador <= num) {
    console.log(acumulador)
    acumulador = acumulador + contador;
    contador++
}



