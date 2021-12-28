let fecha = new Date();
let anio = fecha.getFullYear();
let _dia = fecha.getDate();
let _mes = fecha.getMonth(); //viene con valores de 0 al 11
_mes = _mes + 1; //ahora lo tienes de 1 al 12
if (_mes < 10 ) //ahora le agregas un 0 para el formato date
{
  var mes = "0" + _mes;
  
}else{
  var mes = _mes.toString();
  
}
if(_dia < 10){
  var dia= "0" + _dia
} else{
  var dia = _dia.toString();
}

let fecha_minima = anio + '-' + mes + '-' + dia; // Nueva variable


var fechaMin = document.querySelectorAll(".fechaReserva"); 
fechaMin.forEach(element => element.setAttribute('min', fecha_minima));