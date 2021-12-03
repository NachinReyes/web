let menu =document.getElementById("barra");
let cerrar = document.getElementById("cerrar");
let btnReserva =document.getElementById("reserva");

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("down", window.scrollY>200);
})

/*menu.onclick = function(){
    menu.style.display="none"
    cerrar.style.display="block";
    
}

cerrar.onclick = function(){
    cerrar.style.display="none";
    menu.style.display="block" 
    
}*/

document.getElementById("logo").onclick = function (){
    window.location.href="../index.html";
} 

btnReserva.onclick=function(){
    window.location.href="HTML/reservas.html";
}
/*var div = document.getElementById('capa');
var but = document.getElementById('boton');*/

//la funcion que oculta y muestra
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(menu.style.display == "none"){
cerrar.style.display = "block";
} else if(cerrar.style.display == "block"){
menu.style.display = "none";
}
}
//al hacer click en el boton
menu.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){
console.log('clic');
//obtiendo informacion del DOM para  
var clic = e.target;
console.log(clic);
if(cerrar.style.display == "block" && clic != cerrar){
 cerrar.style.display = "none";
}
}, false);
