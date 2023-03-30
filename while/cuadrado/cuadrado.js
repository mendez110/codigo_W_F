let numero = parseFloat(prompt("Ingrese un numero"));
let contador = 1;
let acumuladora = 1;

while (contador <= numero) {
    acumuladora += contador**2
    contador++;
}
console.log("La suma de los cuadrados de los números es: ",acumuladora);