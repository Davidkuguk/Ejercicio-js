const busqueda = document.querySelector('.busqueda');
//precionar una tecla y soltarla
busqueda.addEventListener('keyup', () => {
    console.log('escribiendo');
});

//validador de formularios
busqueda.addEventListener('blur', () => {
    console.log('validando formulario');
});

//detectar copiado
busqueda.addEventListener('copy', () => {
    console.log('has copiado');
});

//detectar pegado
busqueda.addEventListener('paste', () => {
    console.log('has pegado un texto');
});

//detectar cortado
busqueda.addEventListener('cut', () => {
    console.log('has cortado el texto');
});

//detectar un input
busqueda.addEventListener('input', (event) => {
    console.log(event.target);
    console.log(event.target.value);
});