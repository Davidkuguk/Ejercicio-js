//modificar elementos

const h1 = document.querySelector('.contenido-hero h1');
console.log(h1);

//nos devuelve el html
console.log(h1.innerHTML);

//nos devuelve el texto de la etiqueta
console.log(h1.innterText); //if css visibility:hidden; no encontrara el elemento

//nos devuelve el contenido de la etiqueta
console.log(h1.textContent);

//modificamos el h1
h1.textContent='Nuevo Heading';

const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';