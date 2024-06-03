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

/* Desestructuracion es este objeto literal */
const {age, name} = person;
console.log({age, name})


/*
const { age, name, power = 'No tiene poder'} = person; //puede ser un 
console.log({ age, name, power}) 
 */
/***************************************************** */

/* Interfaces */
/**
 * @description: las interfaces tirnrn varios usos, pero uno de ellos 
 * es poder decir como lucenlos objetos.
 * Esta es la firma de como quiero que quede un objeto 
 * en este caso la superPersona
 */

interface Hero {
    nameSuper: string;
    ageUper: number;
    codeNameSuper: string;
    powerSuper?: string;
    /* Se pone el signo de interrogacion para asegurar 
    que puede que si este el valor o que no este  */
}

export const superPerson: Hero = {
    nameSuper: 'Tony',
    ageUper: 43,
    codeNameSuper: 'IronMan'
}

/* const {ageUper, nameSuper, powerSuper = 'No tiene poder'} = superPerson;

console.log({ageUper, nameSuper, powerSuper})

Algo muy util es desestructurarlo en los argumentos */



/* const createHero = (args: any) => ({

    id: 123455,
    name: args.name,
    age: args.age,
    codeName: args.codeName,
    power: args.power ?? ' No tiene poder'
    //Nueva forma de evaluarsi es nulo.

}) */

/* hay que tratar no de usar valores de tipo any
const createHero = ({name, age, codeName, power}: any)
 */

interface CreateHeroArgs{
    name:string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({

    id: 123455,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? ' No tiene poder'
    //Nueva forma de evaluarsi es nulo.

})

console.log(createHero(person))


