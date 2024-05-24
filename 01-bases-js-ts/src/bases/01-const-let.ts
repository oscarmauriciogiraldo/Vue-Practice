/**
 * @description: Variables y Constantes:
 *  Variables Let vs var 
 *  Const
 */

var firstName = 'Salome';
let lastName = 'Giraldo'
/* ya no se usa var, las variables se deben definir como 
constantes, excepto si el valor se quiere cambiar
es recomendable entonces si esta varaible no va a cambiar su valor
declararla coomo una constante */

const firstNameMother:string = 'Loreinis'; //Forma explicita de definir el tipo de dato
const lastNameMother = 'Padilla';

/* Se muestra estas variables en un objeto literal 
Sin embargo tambien podemos usar el console.table()
*/
console.log(firstNameMother, lastNameMother)
console.log({firstNameMother, lastNameMother})

/**
 * @description: uno de los beneficios de desarrollar con 
 * let y const, aunque el contesto cambia es que evita reenombrar 
 * en el scope
 */

/**
 * @description:Template literal
 * se utilizan los backtics 
 * este tambien aplica para la creacion de variables
 */

//const fullName  = `${firstName} ${lastName}`

export const fullName  = `${firstName} ${lastName}`
/* Esto se hace para transformar este archivo en un modulo */


console.log(fullName)

console.log(`Oscar Giraldo`)

console.log(`${firstNameMother} ${lastNameMother}`)
