const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach((mes,i) =>{
    if(mes === 'Enero'){
        console.log('el valor ' + mes + ' esta en el indice ' + i) ;
    }
});

meses.forEach((mes, i) =>{
    if (mes === 'Diciembre'){
        console.log(`el valor ${mes} + esta en el indice ${i}`);
    }else{
        console.log(`no se encontro el mes Diciembre`)
    }
});

const indice = meses.findIndex(mes => mes === 'Abril')
console.log(`el objeto se encuentra en el indice ${indice}`)

//encontrar indice en arreglo de objetos

const indice2 = carrito.findIndex(producto => producto.precio === 200);
console.log(indice2);