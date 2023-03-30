// Cree un programa que calcule el promedio de 10 números.

let contador =1;
let numero = 0;
let acumulador =0;
let promedio = 0;

while (contador <= 10) {
    numero = parseInt(prompt("Ingrese un número"));
    acumulador = acumulador + numero;
    promedio = acumulador / numero;
    contador++

}
console.log("El promedio de los números ingresados es ",promedio);

