//prevenir event bubling controlandolo
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }else if(e.target.classList.contains('card')){
        console.log('diste click en card');
    }else if(e.target.classList.contains('info')){
        console.log('estas dando click en info');
    }
});