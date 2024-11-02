//cambiar el css
const h1 = document.querySelector('h1');
h1.style.color = 'red;';
h1.style.textTransform = 'uppercase';

const card = document.querySelector('.card');

const nav = document.querySelector('nav');
nav.style.fontWeight = '900'

nav.classList.add('nueva-clase');
const hover = document.querySelector('.nueva-clase:hover');
hover.style.backgroundColor = 'red';