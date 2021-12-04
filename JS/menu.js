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
    if(window.matchMedia("(min-width: 1024px)")){
        location.reload();
    }
}

document.getElementById("logo").onclick = function (){
    window.location.href="../index.html";
} 


