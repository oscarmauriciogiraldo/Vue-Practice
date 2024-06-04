//import { owners } from "../data/heroes";

//Exportacion por defecto
//import misPersonajes, { owners } from "../data/heroes";
//se deberia utilizar mas ien el mismo nombre
import heroes, { owners } from "../data/heroes";

/* podemos separar la logica en varios archivos */

/* Exportar e importar modulos */
//console.log( heroes)

export const getHeroById = ( id: number) => {
    //usamos este id para buscar en heroes
    //return heroes.find( hero => hero.id === id) ?? {};
    return heroes.find( hero => hero.id === id);

    /* Para este punto con esta logica 
    se esta presentando un error muy comun 
    ya que no se esta escribiendo el return para 
    que regrese el valor  */
}

/* const getHeroesByOwner = (owner: string)
(owner: 'DC' | 'Marvel')
valores que se deberian tolerar */
//Mostrar todos los heores
export const getHeroesByOwner = (owner: string) => {
    //return heroes.find( hero => hero.owner === owner)
    /* La funcion find muestra solo el primero elemento
    que encuentre */
    return heroes.filter( hero => hero.owner === owner)

}

/* console.log("heroe", getHeroById(1))
console.log('Heroes de DC Comics', getHeroesByOwner('DC'))
console.log('Heroes de Marvel Comics', getHeroesByOwner('Marvel')) */

