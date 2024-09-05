const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//navegar por el html (por el document)
console.log(navegacion.childNodes);
//los saltos de linea en html crean espacios en blanco que ensucian el script
console.log(navegacion.children); //lista elementos reales
//listar etiquetas
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[2].nodeType);
