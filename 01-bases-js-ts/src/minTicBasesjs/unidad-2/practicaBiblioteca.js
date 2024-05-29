//Libros de la biblioteca
let biblioteca [
    {
        titulo: "cien años de soledad",
        autor: "Gabriel Garcia Marquez",
        añoPublicacion: 1967,
        prestado: false,
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        añoPublicacion: 1949,
        prestado: true,
    },
    {
        titulo: "Don quijote de la mancha",
        autor: "Miguel de Cervantes",
        añoPublicacion: 1605,
        estado: false,
    },
];

function addBook(titulo, autor, añoPublicacion, prestado){

    const newBook = {
        titulo,
        autor,
        añoPublicacion,
        estado,
    };

    //añadir el libro con el metodo push al array que creamos
    biblioteca.push(newBook);

    // buscar un libro por titulo
    /**
     * 
     */
    function buscarLibro(titulo){
        for (let libro of boblioteca){
            if(libro.titulo.toLowerCase() === titulo.toLowerCase()){
                return libro;
            }
        }
        return null;
    }

    //funbcion prestar o devolver libr
    function prestarOdevolverLibro(titulo){
        let libro = buscarLibro(titulo);
        if(libro){
            // validando si el libro esta prestado o no
            libro.prestado = !libro.prestado
            return libro
        }else{
            return "El libro no se encuentra en la biblioteca"
        }

    }

}

addBook("En busca del templo perdido", "Marce proust", 1913, false);
console.log(buscarLibro("En busca del templo perdido"));
console.log(prestarOdevolverLibro("En busca del templo perdido"));
console.log(prestarOdevolverLibro("un libro inexistente"));