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