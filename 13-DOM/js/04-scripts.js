//query selector
//este querySelector selecciona solo la primer clase

const card = document.querySelector('.card');
console.log(card);

//seleccion especifica
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo hijo
const hijo2 = document.querySelector('.card:nth-child(2)');
console.log(hijo2);