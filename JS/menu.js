let menu =document.getElementById("barra");
let cerrar = document.getElementById("cerrar");

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

var tamanoPantalla =Screen.Width=1024;
if(tamanoPantalla >1024){
    console.log("hola");
    menu.style.display="none";
    cerrar.style.display="none";
}


document.getElementById("logo").onclick = function (){
    window.location.href="../index.html";
} 

