//validar formularios
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e){
    e.preventDefault();
    console.log(e);
    console.log('buscando..');
    console.log(e.target.action);
}