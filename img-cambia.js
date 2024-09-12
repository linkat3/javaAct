/* ARRAY DE IMAGENES */
let ads = [];
ads[0] = "./imagenes/sunset01.jpg";
ads[1] = "./imagenes/sunset02.jpg";
ads[2] = "./imagenes/sunsetSea.jpg";

//textos
let textos = [];
textos[0] = "Primera Imagen";
textos[1] = "Segunda Imagen";
textos[2] = "Tercera Imagen";

const boton = document.getElementById("btnUno"); 
let index = 0;
let indice = 0;


document.getElementById("galeria").src = ads[index];
document.getElementById("textoImagen") = textos[indice];

boton.addEventListener("click", () => { 
  
   
   index++;
   indice++;

   if (index>=ads.length) {
      index=0;
   }
   document.getElementById("galeria").src = ads[index];
   document.getElementById("textoImagen") = textos[indice];
   console.log(ads[index]);
   console.log(textos[index]);


});








