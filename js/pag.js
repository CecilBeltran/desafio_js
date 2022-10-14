let arrayReserva = [];
let arrayReservaSala = [];
let clearFav;
let clearFavS;

//TRAIGO LOS OBJETOS (Entrenamiento Funcional) DESDE data.json
let response =fetch ("./json/data.json")
.then((response) => response.json())
.then((json) => { datosParaImprimir = json
mostrarActividades(datosParaImprimir ) }) 


//MOSTRAR LAS ACTIVIDADES DE ENTRENAMIENTO FUNCIONAL Y EVENTO BOTONES
//IMPRIMIR CARTAS
function mostrarActividades(datosParaImprimir) {
  const contenedorDeActividades = document.getElementById("contenedor");
  datosParaImprimir.forEach(datosParaImprimir => {
    const divActividad = document.createElement("div");
    divActividad.classList.add("actividad");
    divActividad.innerHTML = `  <p> ${datosParaImprimir.day} Hora ${datosParaImprimir.hour}</p>`;
    contenedorDeActividades.appendChild(divActividad);
    const botonVerDetalle = crearBotonVerDetalle(datosParaImprimir)
    divActividad.appendChild(botonVerDetalle);
    contenedorDeActividades.appendChild(divActividad);
  }
  )
};


// MUESTRO LO QUE RESERVO
function mostrarDetalle(arrayReserva) {
  var item = ``;
  arrayReserva ? arrayReserva : arrayReserva = JSON.parse(localStorage.getItem("reserva"))  ///// RECUPERO SI HAY COSAS GUARDADOS EN EL LOCALSTORAGE
  eliminarRepetidos(arrayReserva);
  
  const contenedorDeActividadFuncional = document.getElementById("contenedor-funcional");
  console.log(arrayReserva);
  arrayReserva?.map(datosParaImprimir => [item += /////////////// SUMO TODOS LOS ITEMS ITERADOS 
    `
  <p id="detalle"> EL DÍA ${datosParaImprimir.day} A LAS  ${datosParaImprimir.hour} HORAS   </p> ` + ` <button class= "btn btn-outline-danger" onClick="crearBotonEliminar('${datosParaImprimir.id}')" id="boton-borrarActividad"> CANCELAR RESERVA</button> `
   ])
  contenedorDeActividadFuncional.innerHTML = "<h3>ENTRENAMIENTO FUNCIONAL</h3>" + item ;  ////// un solo titulo y sumado todos los días
}

////////////////////////////////////// ELIMINAR REPETIDOS
function eliminarRepetidos(fav) {
  clearFav = [...new Set(fav)]
  return clearFav
  
  }
/////////////////////////////////////


let fav = JSON.parse(localStorage.getItem("reserva")) || [] /////// ME FIJO SI HAY ALGO GUARDADO, SINO LO CARGO COMO ARRAY VACIO


///////////////// GUARDADO LOCAL STORAGE
function guardadoLocalStorage(datosParaImprimir) {
  fav.push(datosParaImprimir)///////// PUSHE LOS OBJETOS EN LA RESERVA EN UN ARRAY VACIO
  fav = eliminarRepetidos(fav)
  localStorage.setItem("reserva", JSON.stringify(fav));////// GUARDO EN EL LOCALSTORAGE
  return fav
}



function crearBotonVerDetalle(datosParaImprimir) {
  const button = document.createElement("button");
  button.className="btn btn-primary";
  button.innerText = "Reservar";
  button.addEventListener("click", () => {
  button.innerHTML = `reservado`
  arrayReserva = guardadoLocalStorage(datosParaImprimir)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'SU RESERVA SE HA REALIZADO',
    showConfirmButton: false,
    timer: 1500
  })
  mostrarDetalle(arrayReserva);
  }
  )
  return button;
}



///CREO FUNCIÓN PARA ELIMINAR LA ACTIVIDAD
function crearBotonEliminar(id){
  eliminarFuncional(id);
  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'SU RESERVA SE HA CANCELADO',
    showConfirmButton: false,
    timer: 1500
  }) 
  mostrarDetalle()
}

////////////////////////////////////////
 


///ELIMINAR RESERVA DEL LOCALSTORAGE
function eliminarFuncional(id){
  let guardar = JSON.parse(localStorage.getItem("reserva"))
  let IndexInArray = guardar.filter(e => e.id !== id)
  guardar.splice(IndexInArray,1)
  let arrayReserva = JSON.stringify(IndexInArray);
  localStorage.setItem("reserva", arrayReserva)
 setTimeout("location.reload()", 2000);  
  //window.location.reload()
}




//TRAIGO LOS OBJETOS DE SALA DE ENTRENAMIENTO DESDE dataSala.json


let response1 = fetch ("./json/dataSala.json")
.then((response1) => response1.json())
.then((json) => { datosParaImprimirSala = json
mostrarActividadesSala(datosParaImprimirSala ) }) 



// //MOSTRAR ACTIVIDADES DE SALA ENTRENAMIENTO Y EVENTO BOTONES

function mostrarActividadesSala(datosParaImprimirSala) {
  const contenedorDeActividadesSala = document.getElementById("contenedor1");
  datosParaImprimirSala.forEach(datosParaImprimirSala => {
    const divActividadSala = document.createElement("div");
    divActividadSala.classList.add("actividadSala");
    divActividadSala.innerHTML = `  <p> ${datosParaImprimirSala.day} Hora ${datosParaImprimirSala.hour}</p>`;
    contenedorDeActividadesSala.appendChild(divActividadSala);
    const botonVerDetalleSala = crearBotonVerDetalleSala(datosParaImprimirSala)
    divActividadSala.appendChild(botonVerDetalleSala);
    contenedorDeActividadesSala.appendChild(divActividadSala);
  }
  )
};


///MUESTRO LO QUE RESERVO 
function mostrarDetalleSala(arrayReservaSala) {
  var itemS = ``;
  arrayReservaSala ? arrayReservaSala : arrayReservaSala = JSON.parse(localStorage.getItem("reservaSala"))  ///// RECUPERO SI HAY COSAS GUARDADOS EN EL LOCALSTORAGE
  const contenedorDeActividadesSala = document.getElementById("contenedor-sala");
  console.log(arrayReservaSala);
  arrayReservaSala?.map(datosParaImprimirSala => [itemS += /////////////// SUMO TODOS LOS ITEMS ITERADOS 
    `
  <p> EL DÍA ${datosParaImprimirSala.day} A LAS ${datosParaImprimirSala.hour} HORAS </p> `+ ` <button class= "btn btn-outline-danger" onClick="crearBotonEliminarSala('${datosParaImprimirSala.id}')" id="boton-borrarSala"> CANCELAR RESERVA</button> `])
  contenedorDeActividadesSala.innerHTML = "<h3>SALA DE ENTRENAMIENTO</h3>" + itemS; ////// un solo titulo y sumado todos los deas
}
let favS = JSON.parse(localStorage.getItem("reservaSala")) || [] /////// ME FIJO SI HAY ALGO GUARDADO, SINO LO CARGO COMO ARRAY VACIO


////////////////////////////////////// ELIMINAR REPETIDOS 
function eliminarRepetidosSala(favS) {
  clearFavS = [...new Set(favS)]
  return clearFavS
}

/////////////////////////////////////



///////////////// GUARDADO LOCAL STORAGE
function guardadoLocalStorageSala(datosParaImprimirSala) {
  favS.push(datosParaImprimirSala)///////// PUSHE LOS OBJETOS EN LA RESERVA EN UN ARRAY VACIO
  favS = eliminarRepetidosSala(favS)
  localStorage.setItem("reservaSala", JSON.stringify(favS));////// GUARDO EN EL LOCALSTORAGE
  return clearFavS
}



////////////////////////////////////////7

function crearBotonVerDetalleSala(datosParaImprimirSala) {
  const button2 = document.createElement("button");
  button2.className="btn btn-warning";
  button2.innerText = "Reservar";
  button2.addEventListener("click", () => {
  button2.innerHTML = `reservado`
  arrayReservaSala = guardadoLocalStorageSala(datosParaImprimirSala)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'SU RESERVA SE HA REALIZADO',
    showConfirmButton: false,
    timer: 1500
  })
  mostrarDetalleSala(arrayReservaSala);
  }
  )
  return button2;
}



///CREO FUNCIÓN PARA ELIMINAR LA ACTIVIDAD EN SALA DE ENTRENAMIENTO
function crearBotonEliminarSala(id){
    eliminarSala(id);
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'SU RESERVA SE HA CANCELADO',
      showConfirmButton: false,
      timer: 1500
    }) 
    mostrarDetalleSala()
   
   
}
////////////////////////////////////////
 
///ELIMINAR RESERVA SALA DEL LOCALSTORAGE
function eliminarSala(id){
  let guardarSala = JSON.parse(localStorage.getItem("reservaSala"))
  let SalaIndexInArray = guardarSala.filter(e => e.id !== id)
  guardarSala.splice(SalaIndexInArray,1)
  let arrayReservaSala = JSON.stringify(SalaIndexInArray);
  localStorage.setItem("reservaSala", arrayReservaSala)
  //window.location.reload()
  setTimeout("location.reload()", 2000);
 }



mostrarDetalle(); 
mostrarDetalleSala();


  



