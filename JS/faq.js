let pagina1 =document.getElementById("pagina1");
let pagina2 =document.getElementById("pagina2");
let seccion1 =document.getElementById("seccion1");
let seccion2 =document.getElementById("seccion2");

pagina2.onclick = function(){
    seccion1.classList.remove("mostrar");
    seccion1.classList.add("ocultar");
    seccion2.classList.remove("ocultar");
    seccion2.classList.add("mostrar");
    
    
};

pagina1.onclick = function(){
    seccion2.classList.remove("mostrar");
    seccion2.classList.add("ocultar");
    
    seccion1.classList.remove("ocultar");
    seccion1.classList.add("mostrar");
    
};