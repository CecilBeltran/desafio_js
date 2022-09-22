let arrayReserva = [];
let arrayReservaSala = [];

class entrenamientoFuncional {
  constructor(id, day, hour, reserved) {
    this.id = id;
    this.day = day;
    this.hour = hour;
    this.reserved = reserved;
  }
};

const funcional1 = new entrenamientoFuncional(10, "Lunes", "8:00", false);
const funcional2 = new entrenamientoFuncional(20, "Martes", "8:00", false);
const funcional3 = new entrenamientoFuncional(30, "Miércoles", "8:00", false);
const funcional4 = new entrenamientoFuncional(40, "Jueves", "8:00", false);
const funcional5 = new entrenamientoFuncional(50, "Viernes", "8:00", false);


let actividadesFuncional = [];
actividadesFuncional.push(funcional1);
actividadesFuncional.push(funcional2);
actividadesFuncional.push(funcional3);
actividadesFuncional.push(funcional4);
actividadesFuncional.push(funcional5);



function salaEntrenamiento(id, day, hour, reserved) {
  this.id = id;
  this.day = day;
  this.hour = hour;
  this.reserved = reserved;
};

const sala1 = new salaEntrenamiento(60, "Lunes", "8:00", false);
const sala2 = new salaEntrenamiento(70, "Martes", "8:00", false);
const sala3 = new salaEntrenamiento(80, "Miercoles", "8:00", false);
const sala4 = new salaEntrenamiento(90, "Jueves", "8:00", false);
const sala5 = new salaEntrenamiento(100, "Viernes", "8:00", false);


let activdadesSala = [];

activdadesSala.push(sala1);
activdadesSala.push(sala2);
activdadesSala.push(sala3);
activdadesSala.push(sala4);
activdadesSala.push(sala5);

//MOSTRAR LAS ACTIVIDADES DE ENTRENAMIENTO FUNCIONAL Y EVENTO BOTONES
//IMPRIMIR CARTAS
function mostrarActividades(entrenamientoFuncional) {
  const contenedorDeActividades = document.getElementById("contenedor");

  actividadesFuncional.forEach(entrenamientoFuncional => {


    const divActividad = document.createElement("div");
    divActividad.classList.add("actividad");
    divActividad.innerHTML = `  <p> ${entrenamientoFuncional.day} Hora ${entrenamientoFuncional.hour}</p>`;
    contenedorDeActividades.appendChild(divActividad);
    

    const botonVerDetalle = crearBotonVerDetalle(entrenamientoFuncional)
    divActividad.appendChild(botonVerDetalle);
    contenedorDeActividades.appendChild(divActividad);
  }
  )
};

function mostrarDetalle(arrayReserva) {


  arrayReserva ? arrayReserva : arrayReserva = JSON.parse(localStorage.getItem("reserva"))  ///// RECUPERO SI HAY COSAS GUARDADOS EN EL LOCALSTORAGE



  const contenedorDeActividadFuncional = document.getElementById("contenedor-funcional");

  console.log(arrayReserva);


  var item = ``;

  arrayReserva.map(entrenamientoFuncional => [item += /////////////// SUMO TODOS LOS ITEMS ITERADOS 
    `
  
  <p> ${entrenamientoFuncional.day}</p>
  <p>${entrenamientoFuncional.hour}</p> `])



  contenedorDeActividadFuncional.innerHTML = "<h3>Entrenamiento Funcional</h3>" + item; ////// un solo titulo y sumado todos los deas

}

////////////////////////////////////// ELIMINAR REPETIDOS
function eliminarRepetidos(params) {

  const unicoFav = new Set(fav);
  clearFav = [...unicoFav]

  return fav
}

/////////////////////////////////////


let fav = JSON.parse(localStorage.getItem("reserva")) || [] /////// ME FIJO SI HAY ALGO GUARDADO, SINO LO CARGO COMO ARRAY VACIO

let clearFav;
///////////////// GUARDADO LOCAL STORAGE
function guardadoLocalStorage(entrenamientoFuncional) {


  fav.push(entrenamientoFuncional)///////// PUSHE LOS OBJETOS EN LA RESERVA EN UN ARRAY VACIO
  fav = eliminarRepetidos(fav)


  localStorage.setItem("reserva", JSON.stringify(fav));////// GUARDO EN EL LOCALSTORAGE
  return clearFav
}


////////////////////////////////////////



function crearBotonVerDetalle(entrenamientoFuncional) {


  const button = document.createElement("button");
  button.innerText = "Reservar";
  button.addEventListener("click", () => {
    button.innerHTML = `reservado`




    arrayReserva = guardadoLocalStorage(entrenamientoFuncional)





    mostrarDetalle(arrayReserva);
  }
  )
  return button;
}

mostrarActividades(entrenamientoFuncional)




// //MOSTRAR ACTIVIDADES DE SALA ENTRENAMIENTO Y EVENTO BOTONES


function mostrarActividadesSala(salaEntrenamiento) {
  const contenedorDeActividadesSala = document.getElementById("contenedor1");

  activdadesSala.forEach(salaEntrenamiento => {


    const divActividadSala = document.createElement("div");
    divActividadSala.classList.add("actividadSala");
    divActividadSala.innerHTML = `  <p> ${salaEntrenamiento.day} Hora ${salaEntrenamiento.hour}</p>`;
    contenedorDeActividadesSala.appendChild(divActividadSala);
 

    const botonVerDetalleSala = crearBotonVerDetalleSala(salaEntrenamiento)
    divActividadSala.appendChild(botonVerDetalleSala);
    contenedorDeActividadesSala.appendChild(divActividadSala);
  }
  )
};

function mostrarDetalleSala(arrayReservaSala) {


  arrayReservaSala ? arrayReservaSala : arrayReservaSala = JSON.parse(localStorage.getItem("reservaSala"))  ///// RECUPERO SI HAY COSAS GUARDADOS EN EL LOCALSTORAGE



  const contenedorDeActividadesSala = document.getElementById("contenedor-sala");

  console.log(arrayReservaSala);


  var itemS = ``;

  arrayReservaSala.map(salaEntrenamiento => [itemS += /////////////// SUMO TODOS LOS ITEMS ITERADOS 
    `
  
  <p> ${salaEntrenamiento.day}</p>
  <p>${salaEntrenamiento.hour}</p> `])



  contenedorDeActividadesSala.innerHTML = "<h3>Sala de Entrenamiento</h3>" + itemS; ////// un solo titulo y sumado todos los deas

}

////////////////////////////////////// ELIMINAR REPETIDOS 
function eliminarRepetidosSala(params) {

  const unicoFavS = new Set(favS);
  clearFavS = [...unicoFavS]

  return favS
}

/////////////////////////////////////


let favS = JSON.parse(localStorage.getItem("reservaSala")) || [] /////// ME FIJO SI HAY ALGO GUARDADO, SINO LO CARGO COMO ARRAY VACIO

let clearFavS;
///////////////// GUARDADO LOCAL STORAGE
function guardadoLocalStorageSala(salaEntrenamiento) {


  favS.push(salaEntrenamiento)///////// PUSHE LOS OBJETOS EN LA RESERVA EN UN ARRAY VACIO
  favS = eliminarRepetidosSala(favS)


  localStorage.setItem("reservaSala", JSON.stringify(favS));////// GUARDO EN EL LOCALSTORAGE
  return clearFavS
}


////////////////////////////////////////7



function crearBotonVerDetalleSala(salaEntrenamiento) {


  const button2 = document.createElement("button");
  button2.innerText = "Reservar";
  button2.addEventListener("click", () => {
    button2.innerHTML = `reservado`


    arrayReservaSala = guardadoLocalStorageSala(salaEntrenamiento)

    mostrarDetalleSala(arrayReservaSala);
  }
  )
  return button2;
}


mostrarActividadesSala(salaEntrenamiento)

mostrarDetalle(); 
mostrarDetalleSala();



