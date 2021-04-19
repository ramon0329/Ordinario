function MostrarCasos(){
    
    let request = new XMLHttpRequest();
     request.responseType="json";
     request.open("GET","https://covid-api.mmediagroup.fr/v1//cases?country=Mexico");
     request.send();
     request.onload= function (){
        const $button = document.querySelector("#boton").addEventListener("click",function (){

        
         let casos = request.response;
         console.log(casos);
 
         const $div= document.querySelector("#casoscov");
         
             $div.innerHTML += `<p class="casos">Casos confirmados de Covid-19 en Tamaulipas: ${casos.Tamaulipas.confirmed}</p>`;
        });
     }
 }

 MostrarCasos();