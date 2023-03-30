/*Cree un programa que muestre los números impares entre 1 y n. 
Use ciclo for*/

let num = parseInt(prompt("Ingrese un número"));

for (let index = 1; index <= num; index++) {
    if (index % 2 != 0) {
        console.log("Impar " + index); 
    }
} 
