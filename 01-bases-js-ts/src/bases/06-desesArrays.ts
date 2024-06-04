/* Desestructuracion en arreglos */

const character = ['Gocku', 'Vegeta', 'Trunks', 'Goten'];

/* la desestructuracion consiste en extraer el valor propiamente de 
un arreglo y definir una variable con ese valor  */

/* const [g] = character

console.log({g})

const [, v] = character */

const [g, b, t, g2, g3 = 'Knshin'] = character

//console.log({v})

/* 
Esta desestructuracion con los arreglos es posicional.

 */

const returnArray = () => {
    return [123, 'ABC'] as const
}

/* 
    Desestructuracion de array
 */
const [numbers, letters] = returnArray();
console.log(numbers * 2, letters.toLowerCase())

