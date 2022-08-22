
//FOR//

let i=1
for (i=1; i<10; i++){
    let nombre = prompt ("Ingrese su nombre");
    alert ("Bienvenido! " + nombre + " se ha inscripto en el lugar n° "+ i);
    console.log ("Se ha inscripto el estudiante con el nombre de  " + nombre + "  en el lugar n° " + i );
}

//WHILE//

let contraseña = Number (prompt ("Ingrese su contraseña"));
let counter = 0;
while (contraseña !== 33 && counter < 3) {
    alert ("Contraseña incorrecta, vuelva a ingresarla");
    console.log ("Contraseña incorrecta");
    let contraseña = Number (prompt ("Ingrese su contraseña"));
    counter++ 
}
if (counter <2) {
    console.log ("ingreso correcto");   
} else {
  console.log ("no hay mas intentos")
}


let problema;
do { 
  console.log ("1- no recuerdas tu contraseña \n 2-no estás registrado \n 0 - salir");
  problema = Number (prompt("elija una opción"));
}while (problema !== 0 );
  

