//tipos de variables
var disponible = 0
let disponible1;
const disponible2 = 0;

/**
JS es un lenguaje sin tipado, por ende una variable puede ser 
de varios tipos [int, String, boolean, char, etc.. ]
actualmente se utiliza mucho más la variable de tipo let
let se usa para cualquier tipo de variables 
const se usa solo para variables estaticas, aquellas que no se podran modificar
**/



const dni = "Y-XXXXXXX-Z";
let nombre_usuario = "patricia";
let numero = 1234;
let array_vacio = [];
let array_con_cosas = ["esto", "es", "un", "array"]
let booleano = true;
let booleanoo = false;

/**
 * *****************OBJETOS******************
*/

let objeto = {
    nombre: "roberto",
    apellido: "Cortez",
    actividadLaboral: true,
    edad: 18,
    estadoCivil: "divorciado",
    padres: carlos = {
        nombre_usuario,
        array_con_cosas
    }
}

console.log(objeto);

