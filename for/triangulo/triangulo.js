let num = parseInt(prompt("Ingrese un número"));
let contador = 1;
let acumuladora = "*";
let x = "*";

for (let contador = 1; contador <= num; contador++) {
    console.log(acumuladora);
    acumuladora += x;
    
    
}

for (let contador = num; contador >0; contador--) {
    console.log(acumuladora);
    acumuladora -= x;
}