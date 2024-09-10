//variables 
const carrito = document.querySelector('#carrito');
const listarCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];
cargarEventListener();


//funcion evento
function cargarEventListener(){
    listarCursos.addEventListener('click', agregarCurso);
}

//funciones
function agregarCurso(e){
    //desactivamos el evento por default (cargar un sitio nuevo)
    e.preventDefault();

    //seleccionamos el objeto si tiene la clase `agregar-carrito`
    if(e.target.classList.contains('agregar-carrito')) {
        //creamos una variable con el elemento padre del padre
         const cursoSeleccionado = e.target.parentElement.parentElement;
         //mostramos por la consola  los datos del elemento seleccionado
        leerDatosCurso(cursoSeleccionado);
    }else{
        console.log('precionando en cursos');
    }
    
}

//lee el contenido del html del evento
//recibimos a los datos en curso
function leerDatosCurso(curso){
    //leemos los datos curso
    console.log(curso);

    //crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //creamos una copia y agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    console.log(articulosCarrito);

    carritoHTML();
}

//muestra el carrito de compras en el html
function carritoHTML(){
    //limpiamos el html porque sino nos muestra lo que tenia antes el array y ahora
    limpiarHTML();

    //listamos el array y por cada uno añadimos tr
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        //cada elemento esta envuelto en un tr
        row.innerHTML= `
        <td>
            ${curso.titulo}
        </td>
        `

        //añadir el html en el body
        //ya que el elemento padre ya esta en el html pues le metemos los hijos
        contenedorCarrito.appendChild(row);
    })
}

//limpiamos el html
function limpiarHTML(){
    contenedorCarrito.innerHTML=` `;
}