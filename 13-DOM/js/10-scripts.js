//generar html con js

//creamos el elemento
const enlace = document.createElement('a');

//agregamos el texto al elemento
enlace.textContent = 'Nuevo enlace';

//añadir atributos
enlace.href = '/nuevo-enlace'

//seleccionamos donde lo queremos mostrar
const navegacion = document.querySelector('.navegacion');

//le añadimos el hijo
navegacion.appendChild(enlace)

//ver la disponibilidad del elemento padre
console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[1]);
console.log(enlace);

//crear card
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//crear div con clase info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear el card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[3]);
console.log(contenedor);
console.log(card);
