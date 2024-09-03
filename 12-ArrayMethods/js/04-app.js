const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

carrito.forEach(producto => {
    if(producto.precio > 350){
        console.log(`el producto ${producto.nombre} supera los 350€`);
    }
});

let resultado;
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

