/**
 * @description: Tipo de datos 
 * tipado de datos - hacer tipado estricto
 */

//import { owners } from "../data/heroes";

//Exportacion por defecto
//import misPersonajes, { owners } from "../data/heroes";
//se deberia utilizar mas ien el mismo nombre
import heroes, { type  Owner } from "../data/heroes";

/* podemos separar la logica en varios archivos */

/* Exportar e importar modulos */
//console.log( heroes)

/* const getHeroesByOwner = (owner: string)
(owner: 'DC' | 'Marvel')
valores que se deberian tolerar */
//Mostrar todos los heores
const getHeroesByOwner = (owner: Owner) => {
    //return heroes.find( hero => hero.owner === owner)
    /* La funcion find muestra solo el primero elemento
    que encuentre */
    return heroes.filter( hero => hero.owner === owner)

}

//console.log("heroe", getHeroById(1))
console.log('Heroes de DC Comics', getHeroesByOwner('DC'))
console.log('Heroes de Marvel Comics', getHeroesByOwner('Marvel'))