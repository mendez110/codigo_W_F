//Cree un programa que muestre los números impares entre 1 y n.

let num = parseInt(prompt("Ingrese un número"));

let contador =0;

while (contador <= num) {
    if (contador % 2 != 0){
        console.log("impar", contador);
      }
    contador++
}
