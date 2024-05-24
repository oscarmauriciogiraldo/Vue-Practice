/* arrays */
/**
 * @description typescript es un superset de js
 * 
 */

export const numberArray = [1, 2, 3, 4, 5]

numberArray.push(6)

console.log({numberArray})

/**
 * @returns: si vemos el valor en consolar 
 * podemos observar que el objeto tiene el numero 6 -> 1 2 3 4 5 6
 */

//const numberArray2 = [...numberArray]
//numberArray2.push(7);

/* Sin embargo, si intentamos agregar un string, deja agregar este 
string aun mostrando un error 
const numberArray2 = [...numberArray]
numberArray2.push('7');
Sin embargo para evitar esto entonces definimos el tipo de array */
const numberArray2: (number|string)[] = [...numberArray]
numberArray2.push('7');
console.log({numberArray, numberArray2}); 

/* Ahora vamos a probar la propiedad o funcionalidad map breve introduccion */

/* const numberArray3 = numberArray.map(value => {
    value.
}) */
