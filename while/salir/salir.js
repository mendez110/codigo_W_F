/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose*/

let confirmacion = prompt("Ingrese S si desea salir o N si no desea salir");

while (confirmacion != ("S")) {
    confirmacion = confirmacion = prompt("Ingrese S para salir");
}

