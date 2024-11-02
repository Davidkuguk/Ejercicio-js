//calcular donde esta la persona
// const donde = window.addEventListener('scroll', () => {
//     console.log('scrolling Y');
    
//     //scroll en px
//     const scrollPX = window.scrollY
//     console.log(scrollPX);
// });

//generar una funcion cuando se llegue al elemento
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 50){
        premium.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
    }else{
         
    }
});
