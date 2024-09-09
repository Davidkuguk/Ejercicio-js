const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
const  hero = document.querySelector('.hero');




btnFlotante.addEventListener('click', () => {
    mostrarOcultarFooter();
    //ocultarHero();
}

);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
       footer.classList.remove('activo'); 
       btnFlotante.classList.remove('activo');
       btnFlotante.textContent='Idioma y moneda';
    }else{
      footer.classList.add('activo');  
      btnFlotante.classList.add('activo');
      btnFlotante.textContent = 'cerrar';
    }
}

function ocultarHero(){
    console.log('le diste a hero');
    if(hero.classList.contains('heroRojo')){
        hero.classList.remove('heroRojo');
        hero.classList.add('hero');
    }else{
        hero.classList.remove('hero');
        hero.classList.add('heroRojo');
    }
}