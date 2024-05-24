/**
 * @Title Object literals -> (objetos literales )
 * @description: se puede cambiar los valores a los que apuntan en memoria
 * mas no se puede reinicializar la constante, lo cual podria pasar con la palabra 
 * reserevada var. 
 * sin embargo esto se puede restringir 
 * @example }as cpmst; 
 * al final del objeto 
 */

export const person = {
    lastName: 'Lodbrok',
    age: 30,
    addres: {
        city: 'Categat',
        zip: 999,
        lat: 14.2233,
        lng: 47.232323
    }
}//as const;
// por ultimo se transforma este objeto en 
//un modulo con export

/**
 * @description cambiar el valor al que apunte la variable
 *@example  person.age = 55 */

const person2 = person;
person2.lastName = 'parker'

console.log({person})
console.log({person2})

/**
 * @returns: person : lastname = parker y del mismo modo en person 2
 * @description: esto susede por que todos los objetos en Js se pasan por 
 * referencia 
 * 
 * Pero si se desea hacer algun tipo de clon del objeto person podemos utilizar 
 * el operador esporeed, para desestructurar el objeto 
 */

//const person3 = {...person}
const person3 = structuredClone(person)
/* desestructura el objeto de manera mas sencilla y hace todo el trabajo
para no desestructurar objeto por objeto  */
