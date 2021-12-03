let menu =document.getElementById("barra");
let cerrar = document.getElementById("cerrar");
let btnReserva =document.getElementById("reserva");

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("down", window.scrollY>200);
})

menu.onclick = function(){
    menu.style.display="none"
    cerrar.style.display="block";
    
}

cerrar.onclick = function(){
    cerrar.style.display="none";
    menu.style.display="block" 
    
}

document.getElementById("logo").onclick = function (){
    window.location.href="../index.html";
} 

btnReserva.onclick=function(){
    window.location.href="HTML/reservas.html";
}
var div = document.getElementById('capa');
var but = document.getElementById('boton');

//la funcion que oculta y muestra
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(div.style.display == "none"){
div.style.display = "block";
} else if(div.style.display == "block"){
div.style.display = "none";
}
}
//al hacer click en el boton
but.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){
console.log('clic');
//obtiendo informacion del DOM para  
var clic = e.target;
console.log(clic);
if(div.style.display == "block" && clic != div){
 div.style.display = "none";
}
}, false);
