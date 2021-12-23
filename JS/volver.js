var volver=document.querySelectorAll(".volver");

let blogBig =document.querySelectorAll(".blog__big");
let thumbnail= document.querySelectorAll(".thumbnail");
var contenedor2=document.querySelectorAll(".blog__grid");
var contenedor=document.querySelectorAll(".blog__articulos");


thumbnail.forEach(element => element.onclick=function(){
contenedor.forEach(element => element.style.display="none");
  
})

volver.forEach(element => element.onclick=function(){   
   blogBig.forEach(element => element.style.display="none");
   contenedor2.forEach(element => element.style.display="block");
   contenedor.forEach(element => element.style.display="flex");
})

/******************************VOLVER A TODOS LOS TEMAS********************* */
    var chicos  = document.querySelectorAll('.thumbnail');
    var grandes = document.querySelectorAll('.blog__big');
    for(var i = 0; i<chicos.length;i++){
      chicos[i].addEventListener('click', (e) => {  
        var seleccion = Array.from(chicos).indexOf(e.target);
        var tema = grandes[`${seleccion}`].style.display ="block";
        
      })
    }
/****************************sidebar************************* */
    
 var transporte=document.querySelectorAll(".doprava");
 var praga=document.querySelectorAll(".praga");
 var comida=document.querySelectorAll(".jidlo");
 var checo=document.querySelectorAll(".checo");

    
 transporte.forEach(element => element.onclick=function(){
  blogBig.forEach(element => element.style.display="none");
  var doprava = document.querySelectorAll('.blog__big')[0];
 doprava.style.display="block";
 })

 praga.forEach(element => element.onclick=function(){
  blogBig.forEach(element => element.style.display="none");
  var doprava = document.querySelectorAll('.blog__big')[1];
  doprava.style.display="block";
 })

 comida.forEach(element => element.onclick=function(){
  blogBig.forEach(element => element.style.display="none");
  var doprava = document.querySelectorAll('.blog__big')[2];
  doprava.style.display="block";
 })

 checo.forEach(element => element.onclick=function(){
  blogBig.forEach(element => element.style.display="none");
  var doprava = document.querySelectorAll('.blog__big')[3];
  doprava.style.display="block";
 })