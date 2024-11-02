//cambiar el css
const h1 = document.querySelector('h1');
h1.style.color = 'red;';
h1.style.textTransform = 'uppercase';

const addClassCard = document.querySelector('.card');
addClassCard.classList.add('newClass');

console.log(addClassCard.classList);

const removeClassCard = document.querySelector('footer');


if(addClassCard.matches = "card"){
    console.log('card have a new class');
}else{
    console.log('footer id has been deleted');
    removeClassCard.classList.remove('footer');
}