# Introduccion JavaScript 

## Unidad 2 MInTic 

### Funciones 

    LLas funciones en JavaScript son bloques de codigo reutilizables, las cuales otorga un mejor nivel y eficiencia. 

    - Una funcion se define como un conjunto de instrucciones logicamente ordenadas, para llevar a cabo una tarea espesifica 

    La grandiosa utilidad de las funciones radica en su capacidad para organizar el codigo, de manera coherente y modular, facilitando su mantenibilidad y posibilitando su reutilizacion. 

    Al utilizar funciones logramos descomponer un problema complejo en tareas mas pequeñas

    Una funcion se ejecuta cuando se llama o se invoca 

    Una funcion esta compuesta por 3 elementos

        - Declaracion de la funcion 
        - Los parametros 
        - Cuerpo de la funcion. 

    Una funcion se define utulizando la palabra clave function 

    function miFuncion(){
        console.log("Hola mundo")
    }

    Se puede llamar la funcion utilizando el nombre de esta funcion 
    
    Ejemplo :

    miFuncion();

    PARAMETROS EN LAS FUNCIONES

    Las funciones tambien toman parametros, estos parametros son valores que se pasan a la funcion cuando se llama 

    Ejemplo

    function saludo(nombre){
        console.log("Hola " + nombre);
        //console.log(`hola ${nombre}`)
    }

    saludo("Loreinis")

### Eventos en JavaScript 

    los eventos juegan un papel importante en la creacion de paginas web interactivas, brindan la capcidad de responder acciones entre el usuario.

    Los eventos juegan un papel fundamental en la programación web
    interactiva. En el contexto de Javascript, los eventos son acciones o
    sucesos que ocurren en un elemento HTML, como hacer clic en un
    botón, mover el mouse sobre un elemento o presionar una tecla en el
    teclado. Los eventos nos permiten detectar estas acciones y ejecutar
    código en respuesta a ellas. Es fundamental comprender los conceptos
    básicos de los eventos para crear sitios web dinámicos e interactivos. 

    Entonces los eventos son acciones que ocurren en el navegador y que se pueden detectar en el codigo de js. pueden ser iniciados por un usuario, como hacer click en un boton, mover el raton o presionar una tecla. o por el propio navegador, como cuando una pagina a terminado de cargar 

    para hacer que tu codigo js responda a a un evento se debe:
        1. seleccionar el elemento que quiere que se "Escuche".
        2. DEfinir la funcion que se ejecute cuando se produce el evento
        3. Agregar un "Escuchadro de eventos" al elemetno que escucharar el eventoy ejecutara la funcion cuando ocurra

        Ejemplo:
        //cambiar el color del botton
        <button id="myButton">click me</button>

        <script>

            //Selecciona el elemento
            let btn = document.getElementById('#myButton');
            
            //Define la funcion
            function cambiarColor(){
                btn.stylebackgroundColor='red'
            }

            //agrega el escuchador de evento o asignar funcion al evento
            btn.addEventListener('click', cambiaColor);

        </script>

        Cuando el usuario hace clock en el boton, se ejecuta la funcion cambiaColor(), esta cambia el fondo del boton a rojo

        #### Practica:

        1. crea una funcion que tome dos numeros y devuelva su suma

        2. añade un escuchador de eventos a un botón que dispare la funcion cuando se haga click en él

        3. pruba disparar un evento distinto al de click, como un evento de teclado o de movimiento del mouse


### Estructuras de datos en JS

    Se refiere a una forma especifica y determinada de organizar y almacenar la infoirmacion y los datos dentro de un programa 
    con el objetivo principal de lograr una utilizacion y feciente en los mismos.

        - Arrays (Arreglos): estructura de datos que contiene una coleccion ede elementos. Estos puedem se de cualquier tipo
            . number
            . string
            . pbjetos 
            . otros array 

            un array se declara utilizando []

            let frutas = ["manzana", "fresa", "cereza"]

            se puede acceder a los elementos de un array por su indice, que es la posicion del elemento del array. los arrays en js son indexados a base de cero, significa que el primer elemetno en el indice es cero

            let frutas = ["manzana", "fresa", "cereza"]

            console.log(frutas[0]); //Imprime "Manzana"

            Agregar un  elemento al final del array

            frutas.push("banano")


        - Objetos: Es una coleccion de propiedades, donde cada propiedad esta compuesta por un nombre (o clave) y un valor. Los calores puede ser de cualquier tipo 

            . number
            . string
            . pbjetos 
            . otros array 

            let conche = {
                marca: "Toyota",
                modelo: "callora",
                año: 2005,
            };


            para acceder a las propiedades de un objeto, es necesario utilizar la notacion punto (.) o cocrchetes

            console.log(coche.marca), //imprime toyota
            console.log(coche.[1]); // Imprime carolla


        - Los Sets (Conjuntos): Es una coleccion de valores unicos, es decir unvalor solo puede aparecer una vez en un set. Es util para crear una coleccion que no tenga duplicados

            let set = new Set();
                set.add(1);
                set.add(2);
                set.add(3);
                set.add(4);
                set.add(5);
                set.add(1); // Este no se puede añadir ya que existe el set 2
            console.log(set.size) // imprime 5


        - Los Mapas: es una coleccion de pares clave-valor, similiar a un objeto. Sin embargo a diferencia de los objetros, las claves en un Map no estan restringidas a strings. Se pueden utilizar cualquier valor (incluyendo objetos) como una clave

            Ejemplo:

            let map = new Map();
                map.set("nombre", "Alice");
                map.set("edad", 25);
            console.log(map.get("nombre")) //Imprime "Alice"

        Cada una de estas estructuras tiene metodos y propiedades.

        Cada estructura de datos tiene su espacio y utilidad.

    #### Estructura de datos Avanzadas 

        existen otras estructuras de datos avanzandas, como las siguientes:
            - listas enlazadas
            - Los Arboles
            - las pilas 
            - las colas

        Sin embargo estas no estan incorporadas en js si se requiere utilizar es necesario una libreria externa

    #### Practica 

        1. Crea un array con los nombres de tus amigos 

        2. Crea un objeto que represente a tu libro favorito, con propiedades como título, autor y numero de paginas

### DOM: Definición, accesoy manipulacion de elementos HTML

    El DOM  se refleja como una estructura de Arbol, que refleja y representa de manera fiel, la estruytura de un documento html 

    #### Manipular DOM en JS

    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Manipular DOM</title>

        <style>
            .big-title[
                font-size: 2em;
            ]
        </style>
        
    </head>
    <body>

        <div class="container-vue">
            <div class="containerTitle">
                <h1 id="title">Hola mundo - manipular dom</h1>
                <p class="content">BIenvenido a js</p>
            </div>
        </div>

        <script>
            //acceder a un elemento por su ID
            let title = document.getElementById('title');
            console.log(title); //muestra el elemento H1 en la consola

            //Acceder a los elementos por su nombre de clase
            let content = document.getElementByClassname('content');
            console.log(content);

            //Cambiar el contenido del elemento
            title.textContent = 'Hola a todos'

            //cambiar el estilo del elemento
            title.style.color = 'red';

            //Agregar una clase al alemento
            title.ClassList.add('big-title')
        </script>
        
    </body>
    </html>

    #### Practica:

        1. Seleccione un elemento del DOM por su ID y cambie su contenido 

        2. seleccione varios elementos por su clase y cambie su color de fondo.

        3. Añadir un nuevo elemento al DOM con un texto cualquiera 

        4. crea un manejador de eventos que cambie el color de un elemento cuando el usuario pase el mouse sobre el. 

        5. crea un manejador de eventos que elemine un elemento cuando el usuario haga doble clic en el 

        Preguntas 

        1. Que es document querySelector()?
            metodo para seleccionar elementos en js

        2. como se selecciona un elemento por su ID
            document.getElementById(id);

        3. como se cambia el contenido de un elemento?
            elemento.textContent = 'nuevo contenido';
            elemento.innerHTML = 'nuevo contenido';

        4. Como se agrega un nuevo elemento al DOM
            document.createElement('p')
            
        5. como asignar una funcion a un ecvento de clic en un elemento
            elemento.addEventListener('click', miFuncion)


### Blivlioteca en JS - practica 

    aplicacion para gestionar una biblioteca de libros


# Retomando temas puntuales de JavaScrip para Typescript

## Seccion 2 

### Temas de la Seccion 
    - Composition Api vs Options Api
    - Propiedades reactivas con Ref
    - propiedades de solo lectura con computed
    - funcion para crear una aplicacion de vue 
    - Eventos y modificadores de eventos
        . click
        . keyPress 
        . Enter 
    - Invocar funciones 
    - Directivas 
        . V-If
        . V-Fot 
        . V-show


### Introduccion 
    Vue es un framework progresivo, por que cuando se iniia un proyecto, puede que esta pequeña parte solo 
    este controlada por vue, o bien que vue trabaje enteramente con la aplicacion 

### Composition Api VS Options Api
    Composition api es la nueva forma de trabajar en vue, ofrece nuevas funcionalidades 
    que no se pueden trabajar en options api 

#### Hola Mundo Nueva sintaxis vs Antigua sintaxis

    - Antigua sintaxis 
        
        const app = Vue.createApp({

        })

    - Nueva Sintaxis 

        const {createApp, ref} = Vue;

        const app = createApp ({
            //template literals
            template: `
                <h1>Hola mundo</h1>
                <p> desde la app.js <p>
            `
        });

### Propiedades Reactivas con ref

#### Variables reactivas 

    se quiere cambiar el valor de una variable, esto permite que los valores 
    de algunas variables cambien dinamicamente

    const app = createApp ({
        //template literals
        template: `
            <h1>Hola mundo</h1>
            <p> desde la app.js <p>
        `,
        setup(){}
    });

    Dentro de este componente se crearan estas variables reactivas, con la funcion 
    Setup(), esta funcion es el inicio del composition api, se ejecuta inmiediatamente 
    el componente se monta, es particular del ciclo de vida de los componentes. 

    de esta forma podemos renderizar el mensaje (message) en nuestro sitio web de esta 
    forma : 

    const app = createApp ({
        //template literals
        template: `
            <h1>{{message}}</h1>
            <p> desde la app.js <p>
        `,
        //Variables reactivas - Inicio Composition Api
        //Setup() => Funcion especial del ciclo de vida de los componentes 
        setup(){

            const message = "I'm Batman";
        }
    });

    Sin embargo con este tipo de sintaxis se debe agregar un return para asegurar 
    que es lo que se quiere exponer en el template, de esta manera 

    const app = createApp ({
        //template literals
        template: `
            <h1>{{message}}</h1>
            <p> desde la app.js <p>
        `,
        //Variables reactivas - Inicio Composition Api
        //Setup() => Funcion especial del ciclo de vida de los componentes 
        setup(){

            const message = "I'm Batman";

            return{
                message,
            }
        }
    });

    Pero que pasa si se requiere cambiar la constante message, si se hace lo siguiente:

    setTimeout(() => {
        message = 'Soy goku'
    })





        

