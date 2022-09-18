let option;
let resultado;
let resultado1;
let listaFuncional;
let listaSala;
let mensaje="";


class entrenamientoFuncional {
  constructor(id,day,hour,reserved) {
    this.id= id;
    this.day= day;
    this.hour= hour;
    this.reserved= reserved;
} };

const funcional1= new entrenamientoFuncional (10, "Lunes","8:00", false);
const funcional2= new entrenamientoFuncional (20, "Martes", "8:00", false);
const funcional3= new entrenamientoFuncional (30, "Miércoles", "8:00", false);
const funcional4= new entrenamientoFuncional (40, "Jueves", "8:00", false);
const funcional5= new entrenamientoFuncional (50, "Viernes","8:00", false);


let actividadesFuncional=[ ];
actividadesFuncional.push(funcional1);
actividadesFuncional.push(funcional2);
actividadesFuncional.push(funcional3);
actividadesFuncional.push(funcional4);
actividadesFuncional.push (funcional5);



function salaEntrenamiento (id,day,hour,reserved) {    
    this.id= id;
    this.day= day;
    this.hour= hour;
    this.reserved= reserved;
};

const sala1= new salaEntrenamiento (60, "Lunes","8:00", false);
const sala2= new salaEntrenamiento (70, "Martes","8:00", false);
const sala3= new salaEntrenamiento (80, "Miercoles","8:00", false);
const sala4= new salaEntrenamiento (90, "Jueves","8:00", false);
const sala5= new salaEntrenamiento (100, "Viernes","8:00", false);


let activdadesSala =[];

activdadesSala.push(sala1);
activdadesSala.push(sala2);
activdadesSala.push(sala3);
activdadesSala.push(sala4);
activdadesSala.push(sala5);

//MOSTRAR LAS ACTIVIDADES DE ENTRENAMIENTO FUNCIONAL Y EVENTO BOTONES

function mostrarActividades(actividadesFuncional) {
  const contenedorDeActividades = document.getElementById("contenedor");
  actividadesFuncional.forEach(entrenamientoFuncional => {
  console.log(entrenamientoFuncional);
  const divActividad = document.createElement("div");
  divActividad.classList.add ("actividad");
  divActividad.innerHTML=  `  <button> ${entrenamientoFuncional.day} Hora ${entrenamientoFuncional.hour}</button>`;
  contenedorDeActividades.appendChild(divActividad);
  divActividad.addEventListener("click", (e)=>{e= result});
  }
  )
}
//FILTRAR POR ID
let result  = actividadesFuncional.filter(actividadesFuncional => actividadesFuncional.id);
mostrarActividades(actividadesFuncional);
   

//MOSTRAR ACTIVIDADES DE SALA ENTRENAMIENTO Y EVENTO BOTONES
function mostrarActividadesSala(activdadesSala) {
  const contenedorDeActividades1 = document.getElementById("contenedor1");
  activdadesSala.forEach(salaEntrenamiento => {
  console.log(salaEntrenamiento);
  const divActividadSala = document.createElement("div");
  divActividadSala.classList.add ("actividadSala");
  divActividadSala.innerHTML=  `  <button> ${salaEntrenamiento.day} Hora ${salaEntrenamiento.hour}</button>`;
  contenedorDeActividades1.appendChild(divActividadSala);
  divActividadSala.addEventListener("click",(e)=>{e= result1});
  }
)
};
//FILTRAR POR ID
let result1  = activdadesSala.filter(activdadesSala => activdadesSala.id);
mostrarActividadesSala(activdadesSala);


//MOSTRAR RESERVA DE ACTIVIDAD - EVENTO BOTÓN MOSTRAR RESERVAS
const verReserva = document.querySelector ("#verReserva");
const mostrarAgenda =document.createElement ("p");
const botonReserva= document.querySelector("#mostrarAgenda");
botonReserva.addEventListener("click", () => {mostrarAgenda.innerHTML =  resultado +resultado1,
verReserva.append(mostrarAgenda) }); 

console.log(mostrarAgenda);
function agenda(result) {
  resultado = "Se ha agendado para Entrenamiento  Funcional :"+ result  ;
  return resultado;
};
agenda(result);
function agenda1(result1) {
  resultado1 = "Se agendado para sala de Entrenamiento :" + result1  ;
  return resultado1;
}
agenda1(result1);
