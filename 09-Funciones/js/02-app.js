/**
 * Esta Funcion tiene hoistick lo que nos permite 
 * llamar a la funcion antes de que sea creada
 */
sumar();
function sumar(){
    console.log(2+2);
}



/**
 * En esta funcion tenemos el problema de que 
 * solo se llama a la funcion, despues de ser creada
 * no tiene hoistick
 */
const sumar2 = function(){
    console.log(3+3);
}

sumar2();