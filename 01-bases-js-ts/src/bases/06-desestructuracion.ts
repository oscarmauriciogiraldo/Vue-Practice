/**
 * @title Desestructuracion de objetos
 * @description la desestructuracion es util 
 * para tomar propiedades o valores de un arreglo o piezas de un objeto 
 * sin tener que hacer referencia a un objeto
 * 
 * la desestructuracion es hacer un objeto literal igual al objeto
 * 
 * @example const {} = person
 */

export const person = {
    name: 'Loreinis',
    age: 28,
    codeName: 'Amorcito'
}
/* Supongamos que necesito imprimir el valor de age 
y el valor de codeName */
/**
 *@example 
 console.log({age, name, power})
 */

console.log(person.name);
console.log(person.age);
console.log(person.codeName)

/* y si queremos mostrar esto en un solo console.log? 
Esto es un poco tedioso hacerlo pero funciona */

console.log({
    name: person.name,
    age: person.age
});

/***************************************************** */


/*
const { age, name, power = 'No tiene poder'} = person; //puede ser un 
console.log({ age, name, power}) 
 */

/* Interfaces */
/**
 * @description: las interfaces tirnrn varios usos, pero uno de ellos 
 * es poder decir como lucenlos objetos
 */

interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
    /* Se pone el signo de interrogacion para asegurar 
    que puede que si este el valor o que no este  */
}

export const person2: Hero = {
    name: 'Tony',
    age: 43,
    codeName: 'IronMan'
}


const createHero = () => ({

})


