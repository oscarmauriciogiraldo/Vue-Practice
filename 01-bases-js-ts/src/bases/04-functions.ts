/* Funciones en js
codigo encapsuilado que se puede reutilizar */

/* function getPerson(name){
    return `hola &{ name }`
} */

/*  debido al error se puede cambiar para que esto sea permitido 
 hay una propiedad que viene por defecto que es el no inplicit any
 qeu es (name : any )
 function getPerson(name: any){
    return `hola &{ name }`
}
 pero es mejor evitar a toda costa evitar este tipo de 
 valor any */

/* function getPerson(name: string){
    return `hola ${ name }`
} */


/**
 * @description Funcion flecha
 * ahora se puede hacer esto mejor para evitar
 * errores y que sea mas optimo el desarrollo 
 * con una funcion de flecha
 * @param name 
 * @returns 
 */
const getPerson = (name: string) =>{
    // funcion que el valor de retorno no es nada si no hay 
    //nad dentro 
    return `hola ${ name }`
}

/* Existe otra forma de escribir funciones  
--- Cuando solo tenemos una funcion como esta 
donde solo tenemos un return, entonces lo podemos simplificar de este forma
*/

const getPerson2 = (name: string) => `hola ${ name }`



console.log(getPerson('Oscar'))


/* const getUser = () =>{
    //Funcion que retorna un objeto
    return {
        uid: '1088322329',
        username: 'oscar.giraldo'
    }
} */

/* Ahora, tambien esto se puede simplificar, y decirle a la funcion 
que esta haciendo un retunr explicito de un objeto */

/* const getUser = () => ({
    uid: '1088322329',
    username: 'oscar.giraldo'
}) */

/* Tambien si neceito recibir argumentos en la funcion  */

const getUser = (usrid: string) => ({
    //uid: '1088322329',
    uid: usrid,
    username: 'oscar.giraldo'
})


console.log(getUser('AZX-ABC'))


/**
 * @description: funciones segunda parte
 */

//array de objetos
const heroes = [
    {
        id: 1,
        name: 'Batman',
        //utilizar trealin coma (,)
    },
    {
        id: 2,
        name: 'Super man',
    }

]
/* Toda variable no inicializada en js tiene valor undefined
es decir: si el segundo objeto tiene el atributo power, entonces en el primer objeto
este valor sera indefinido */

/**
 * @description: tomar el valor de un heroe 
 * se puede hacer de esta manera 
 */

const hero = heroes.find((h) => h.id === 1);

console.log(hero?.name);
/* her? esto es un null check, es una comprobacion de  */