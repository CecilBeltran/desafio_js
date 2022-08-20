var remera;
var campera;
var color;
var talle;
remera = confirm ("Quieres llevar una remera?");
color = prompt ("de que color prefieres?");
campera = confirm ("Quieres llevar una campera?");
talle = Number (prompt ("Cual es tu talle?") );

if (remera === true && color === "negro") {
    console.log ("que buena elección!!");
}else if (campera === true && talle <= 35){
    console.log ("no contamos con la mercadería solicitada");
}
else {
    console.log ("Lamentamos no contar con lo solicitado 😔");
}


//FOR//

let i=1
for (i=1; i<30; i++){
    let nombre = prompt ("Ingrese su nombre");
    alert ("Bienvenido! " + nombre + " se ha inscripto en el lugar n° "+ i);
    console.log ("Se ha inscripto el estudiante con el nombre de  " + nombre + "  en el lugar n° " + i );
}

//WHILE//

let contraseña = Number (prompt ("Ingrese su contraseña"));
let counter = 0;
while (contraseña !== 122 && counter < 3) {
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


