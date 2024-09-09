const nav = document.querySelector('.navegacion');

//click
nav.addEventListener('click', () =>{
    console.log('clickeaste');
    nav.style.backgroundColor = 'transparent';

});

//mouse in
nav.addEventListener('mouseenter', () =>{

    console.log('estas sobre el objeto');
    nav.style.backgroundColor = 'transparent';

});
//mouse out
nav.addEventListener('mouseout', () => {
    console.log('Estas saliendo de la navegacion');
    nav.style.backgroundColor = 'red';
})