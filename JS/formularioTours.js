var reservas = document.querySelectorAll(".form__tours__titulo");
var formTours = document.querySelectorAll(".form__tours__body")


    for(var i = 0; i<reservas.length;i++){
      reservas[i].addEventListener('click', (e) => {  
        var seleccion = Array.from(reservas).indexOf(e.target);
    
        formTours.forEach(element => element.style.display="none");
        var seleccionado = formTours[`${seleccion}`].style.display ="block";
        
        
      })
    }

    /*reservas.forEach(element => element.onclick=function(){
        formTours.forEach(element => element.style.display="none");
          
        })*/



        var card = document.querySelectorAll(".card__imagen");
        var toursG = document.querySelectorAll(".nomostrar");
        var pequenos = document.querySelector("#articulos");
        

        for(var i = 0; i<card.length;i++){
            card[i].addEventListener('click', (e) => {  
              var sele = Array.from(card).indexOf(e.target);
              console.log(selec);
              
              toursG.forEach(element => element.style.display="none");
              var selec = toursG[`${sele}`].style.display ="block";
              pequenos.style.display="none";
              
            })
          }
      
          var mostrarT = document.querySelectorAll(".mostrarT");
          mostrarT.forEach(element => element.onclick=function(){
            pequenos.style.display="block";
            toursG.forEach(element => element.style.display="none")
              
            })
    