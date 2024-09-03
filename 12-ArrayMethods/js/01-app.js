const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor existe en un arreglo
meses.forEach(mes => {
    if(mes = 'enero'){
        console.log('el valor ' + mes + ' existe') ;
    }
})

//buscar un valor concreto en un array
const resultado = meses.includes('Julio');
console.log(resultado);

//buscar un valor concreto en un array de objetos
const existe = carrito.some(producto => {
    return producto.nombre === 'Celular'
})
console.log(existe)

//tambien podemos utilisar metodos
let t = 'Teclado';
const tecladoExiste = carrito.some(producto => {
    return producto.nombre.ignoreCase === t.ignoreCase}
)
console.log(tecladoExiste)