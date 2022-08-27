//CALCULADORA DE INDICE DE MASA CORPORAL
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
  
  function ResultadoIMC ( ){ 
  let mensaje= "Usted mide  " + altura + " metros y pesa  " + peso + "Kg , su indice es de " + indice.toFixed(0) + " su clasificación es:  "+ resultado;
  alert (mensaje);
  }
  var sexo = prompt ("Indique su sexo, con la letra m si es mujer y con la letra h si es hombre.");
  var altura =parseFloat (prompt("Indique su altura en m")) ;
  var peso = parseInt (prompt("Ingrese su peso en Kg"));
  let indice = (peso / (altura * altura))
  let resultado =""; 
  
  console.log (indice.toFixed(0));
  CalculoIndice();
  console.log (resultado)
  ResultadoIMC();
  
