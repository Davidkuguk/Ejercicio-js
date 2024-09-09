//eventos bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

//bubling es cuando suceden varios eventos de manera inesperada
//porque tocamos un elemento hijo y se extiende hasta el padre
//para pararlo usamos e.stopPropagation
cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card');
})

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();

    console.log('click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();

    console.log('click en titulo');
});