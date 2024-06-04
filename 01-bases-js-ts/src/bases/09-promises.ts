import type { Hero } from '../data/heroes';
import { getHeroById } from './07-imp-exp';
/**
 * @description: promesas 
 * las promesas tienen su codigo de resolucion sincrono
 * @example. new Primise() para crear una nueva instancia 
 * de esa promesa
 */

/* console.log('Inicio');

new Promise((resolve, reject ) => {
    //console.log('Cuerpo de la promesa')
    setTimeout(() => {
        //resolve('Mi amigo cumpli, me regreso el dinero');

        reject('Mi amigo no cumplio')
    }, 1000);

}).then((message) => console.log(message) )
    .catch(errorMessage => console.log(errorMessage) )
    .finally(() => console.log('Fin de la promesa'))

console.log('Fin') */

/* ********************************************** */
/* Argumentyos a la spromesas */
const getHeroByIdAsync = (id: number):Promise<Hero> => {
    //si se pretende recibir el argumento id
    /* y trabajar de manera asincrona para ver cual es el heroe 
    por conectarse a una base de datos y el end point */
    return new Promise( (resolve, reject) => {
        //cuerpo de la funcion
        //intervalo de tiempo
        
        setTimeout(() => {

            const hero = getHeroById(id);

            /* if( hero ){
                resolve(hero)
            } else {
                // reject ('Heroe no encontrado') 
                reject (`Heroe no encontrado #${id}`)
            } */

            /* Para resumir mas podria utilizar un operador ternario */
            hero ? resolve(hero) : reject (`Heroe no encontrado #${id}`)

            /* if( hero ){
                resolve(hero);
                return;
            }
            reject (`Heroe no encontrado #${id}`) */
        }, 1500)

    })
}

getHeroByIdAsync(2).then(hero => console.log('el nombre es ', hero.name))
    .catch(alert)
    //.catch(message => alert(message))



/* ****************** Resumiendo el codigo ****************** */