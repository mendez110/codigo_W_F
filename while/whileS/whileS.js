let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese una potencia"));
let contador = 1;
let acumuladora = 0;

while (contador <= num2) {
    acumuladora = acumuladora + num1;
    contador++
}

console.log("La suma total es: " , acumuladora)
