let option;
let resultado;
let listaFuncional;
let listaSala;
let mensaje="";
let verAgenda="";
let agenda="";
function entrenamientoFuncional (id,day,hour,reserved) {
    this.id= id;
    this.day= day;
    this.hour= hour;
    this.reserved= reserved;
};
const funcional1= new entrenamientoFuncional (10, "Lunes","8:00", false);
const funcional2= new entrenamientoFuncional (20, "Martes", "8:00", false);
const funcional3= new entrenamientoFuncional (30, "Miércoles", "8:00", false);
const funcional4= new entrenamientoFuncional (30, "Jueves", "8:00", false);
const funcional5= new entrenamientoFuncional (50, "Viernes","8:00", false);


let actividadesFuncional=[ funcional1, funcional2, funcional3, funcional4, funcional5];

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


let activdadesSala =[sala1, sala2, sala3, sala4, sala5];
let reserva= "";

while(option !== 0) {
    option = Number(prompt("Ingrese una opción:\n1. Reservar una Actividad\n2. Ver mis reservas \n3. Calculr IMC \n0. Salir"));
    
    switch (option) {
        case 1:
            const activdad = Number (prompt ("Ingrese una opción: \n 1. para reservar Entrenamiento Funcional \n 2. para reservar Sala de Entrenamiento"));
            const day = Number(prompt("Ingrese el día de la semana que va a concurrir:\n 1. Lunes\n 2. Martes\n 3. Miércoles\n 4. Jueves \n 5. Viernes"));
            
            if (activdad === 1 && day ===1){
                funcional1.reserved= true;
                alert ("Usted tiene una reseva para Entrenamiento Funcional");
                verAgenda=  "Entrenamiento Funcional  " + funcional1.day + " " + funcional1.hour;
                console.log (funcional1);
            } else if (activdad ===1 && day ===2){
               funcional2.reserved= true;
               alert ("Usted tiene una reseva para Entrenamiento Funcional");
                console.log (funcional2);
                verAgenda=  "Entrenamiento Funcional  " + funcional2.day + " " +funcional2.hour;
            } else if (activdad ===1 && day ===3){
               funcional3.reserved= true;
               alert ("Usted tiene una reseva para Entrenamiento Funcional");
                console.log (funcional3);
                verAgenda=  "Entrenamiento Funcional  " + funcional3.day + " " +funcional3.hour;
            } else if (activdad ===1 && day ===4){
               funcional4.reserved= true;
               alert ("Usted tiene una reseva para Entrenamiento Funcional");
               console.log ( funcional4); 
               verAgenda=  "Entrenamiento Funcional  " + funcional4.day + " " +funcional4.hour;
            } else if (activdad ===1 && day ===5){
               funcional5.reserved= true; 
               alert ("Usted tiene una reseva para Entrenamiento Funcional");
               console.log (funcional5);   
               verAgenda=  "Entrenamiento Funcional  " + funcional5.day + " " +funcional5.hour;
            } else if (activdad === 2 && day ===1){
                sala1.reserved= true; 
                alert ("Usted tiene una reseva para Sala de Entrenamiento");
                console.log (sala1);
                verAgenda=  "Sala de  Entrenamiento   " + sala1.day + " " +sala1.hour;
            } else if (activdad ===2 && day ===2){
                sala2.reserved= true;
                alert ("Usted tiene una reseva para Sala de Entrenamiento");
                console.log (sala2);
                verAgenda=  "Sala de  Entrenamiento   " + sala2.day + " " +sala2.hour;
            } else if (activdad===2 && day ===3){
                sala3.reserved= true;
                alert ("Usted tiene una reseva para Sala de Entrenamiento");
                console.log (sala3);
                verAgenda=  "Sala de  Entrenamiento   " + sala3.day + " " +sala3.hour;
            } else if (activdad ===2 && day ===4){
                sala4.reserved= true;
                alert ("Usted tiene una reseva para Sala de Entrenamiento");
                console.log (sala4); 
                verAgenda=  "Sala de  Entrenamiento   " + sala4.day + " " +sala4.hour;
            } else if (activdad ===2 && day ===5){
                sala5.reserved= true;
                alert ("Usted tiene una reseva para Sala de Entrenamiento");
                console.log (sala5);   
                verAgenda=  "Sala de  Entrenamiento   " + sala5.day + " " +sala5.hour;
            } else {
                alert("La opción ingresada no es correcta, intente nuevamente");
            } ;  
            break;
        case 2:
             let agendaSala = activdadesSala.filter(listaSala => listaSala.reserved === true);
             console.log (agendaSala);
             let agendaFuncional = actividadesFuncional.filter (listaFuncional => listaFuncional.reserved === true);
            console.log (agendaFuncional);
            break;
        case 3:
            var sexo = prompt ("Indique su sexo, con la letra m si es mujer y con la letra h si es hombre.");
            var altura =parseFloat (prompt("Indique su altura en m")) ;
            var peso = parseInt (prompt("Ingrese su peso en Kg"));
            var indice = (peso / (altura * altura));
            
            function CalculoIndice (){
                resultado= "";
                switch (sexo){
                  case "m":
                    if (indice < 20 ){
                      resultado ="Bajo peso.";
                    }
                    else if (indice >=20 && indice <24){
                      resultado = "Peso Normal.";
                    }
                    else if ( indice >= 24 &&indice < 29){
                      resultado ="Obesidad leve.";
                    }
                    else if (indice >=30 && indice <40) {
                      resultado = "Obesidad severa.";
                    }
                    else {
                      resultado = "Obesidad muy severa.";
                    }
                    break
                    
                    case "h":
                    if(indice < 21 ){
                      resultado="Bajo Peso.";
                    }
                    else if (indice >=21 && indice <25){
                      resultado= "Normal.";
                    }
                    else if ( indice >= 25 &&indice < 30){
                      resultado="Obesidad leve.";
                    }
                    else if (indice >=30 && indice <40) {
                      resultado = "Obesidad severa.";
                    }
                    else {
                      resultado="Obesidad muy severa.";
                    }
                    break
                    default:
                      resultado= "No se ha podido calcular.No ha indicado h (hombre) o m (mujer)";       
                }
                return "Su indice es ;" + indice.toFixed(0) + "y su clasificación es :" + resultado ;
              } 
                console.log (indice.toFixed(0));
                CalculoIndice();
                console.log (resultado)
                ResultadoIMC();
            break;
        case 0: 
                alert("Gracias, nos vemos!!");
            break;
        default:
                alert("La opción ingresa no es correcta, intente nuevamente");
            break;
    }
};
function seleccionarActividad(activdadesSala) {
     listaSala = []
    for (let activdadesSala of activdadesSala(true)) {
        listaSala.push(reserva)
        };
};   
    function seleccionarActividad2(actividadesFuncional) {
    listaFuncional = []
    for (let actividadesFuncional of actividadesFuncional(true)) {
        listaFuncional.push(reserva)
        };
};     

function ResultadoIMC ( ){ 
 
    mensaje= "Usted mide  " + altura + " metros y pesa  " + peso + "Kg , su indice es de " + indice.toFixed(0) + " su clasificación es:  "+ resultado;
}



const result = document.querySelector ("#result");
const mostrarResult =document.createElement ("p");



const boton= document.getElementById("boton");
boton.addEventListener("click", () => mostrarResult.innerHTML = mensaje,
result.append(mostrarResult));


const verReserva = document.querySelector ("#verReserva");
const mostrarAgenda =document.createElement ("p");


const botonReserva= document.querySelector("#mostrarAgenda");
botonReserva.addEventListener("click", () => mostrarAgenda.innerHTML = verAgenda,
verReserva.append(mostrarAgenda));
