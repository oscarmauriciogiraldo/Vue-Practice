export interface Hero {
    id: number;
    name: string;
    owner: Owner;
    //owner tipado cerrado
    /* crear tipo en espesifico */
}

/* tipos cuando son un valor en espesifio */
export type Owner = 'DC' | 'Marvel';

/* Array de objetos */
const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Podemos eliminar  todas las propiedades de modificacion de este arreglo 
export const owners = ['DC','Marvel'] as const;

export default heroes;