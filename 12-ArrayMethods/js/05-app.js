const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//con un for each
let resultado = '';
carrito.forEach((producto, index) =>{
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
} );

console.log(resultado);

const resultado2 = carrito.find(producto => producto.precio === 100)
console.log(resultado2);