# Introduccion JavaScript 
https://vscode.dev/tunnel/laptop-pp7aves1/c:/Users/Oscar/Documents/CursoVueDeCeroAExperto/Udemy/Vue-Practice

## Unidad 2 MInTic 

### Funciones 

    Las funciones en JavaScript son bloques de codigo reutilizables, las cuales otorga un mejor nivel y eficiencia. 

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

## Unidad 3 Interfaces - MinTic 

### Introduccion 

    - Gestion de formularios
    - Validar los datos 
    - Implementar validacion de formularios del lado del cliente
    - validacion del lado del servidor 
    - Manejo de eventos en los formularios 
    - Librerias y frameworks
    - desarrollo Frontend 

### Gestion de formularios JS

#### Introduccion 

    Son una parte fundamental de casi todas las paginas web.

    son los espacios donde se escribe infoirmacion, como nombre, y difernetes datos personales, cuando se quiere hacer parte de un sitio web o un juego en linea 

    La gestion de formularios se refiere a cómo una compuadora o un pagina web recoge, verifica y utiliza esa informacion. Es como tener a alguien que que se asegure de que esa infoirmacion que pone en el formulario sea correcta y segura.

    Ejemplo: 

    si tenemos un campo para la edad, esta gestion se aseguraria de que se ponga un numero y no letras o simbolos extraños. Esta gestion tambien ayuda que la informacion se vaya al lugar correcto. 


#### Elementos de formularios 

    . Campos de texto: para escribir datos como nombre o correo electronico.

    . casillas de verificacion: para elegir opciones como cuando se selcciona juegod facoritos

    . Botones de opcion de una lista: cuando se elige una opcion en una lista 

    . Botones: Para enviar o borrar la informacion que se ha escrito 

#### La funcion de Js en los formularios 

    Js es como el director de una pelicula que asegura que todos los actores (Elementos del formularios) hagan su trabajo correctamente.
    JS controla lo que sucede con la informacion que pone en el formulario y como se maneja. 
    Puede asegurarse de que la informacion sea correcta antes de enviarla, mostrar mensajes si algo esta mal y enviar la informacion al lugar correcto.

#### Trabajando con formularios en JS 

    Con js podemos hacer que los formuilarios sean aún más interactivos y útiles. Aquí algunas de las cosas que se pueden hacer 

        - Validacion de formularios :
            Se asegura de que la informacion que se pone en el formulario sea correcta. 
            Por ejemplo: 
            si en un campo se pone la edad js verifica que escribas un dato tipo numero y no letras, si algo esta mal puede mostrar un mensaje de error o alerta, que indique que se debe corregir

        - Eventos de Formularios: 
            Acciones que tiene el formulario.
            ejemplo: 
                dar clic en un boton para guardar la informacion 
        - manejo de informacion
            una vez la informacion este correcta y se hay aenviado correctamente js puede decidir que hacer con ella, se podria almacenar para usarla mas tarde. 
            Tambien se podria almacenar a otra parte de la pagina web, para crear algo nuevo.

#### Por que JS? 
    
    . js es un lenguaje de programcion diseñado para desarrollar paginas y aplicaciones web interactivas, permite crear respuestas en tiempo real en el navegador sin tener que recargar la pagina. 

    . Es realmente util para los formularios, significa que podemos mostrar mensajes de error, inmiediatamente si algo está mal en lugar de tener que esperar que la pagina recargue. 
    Tambien se pueden hacer cosas interesantes como ocultar y mostrar partes del formulario segun lo que el formulario hay ingresado, creando una expriencia mas dinamica e interactiva 


### Uso de librerias y Frameworks 

    VIRTUAL DOM

    muchos datos con el dom real puede hacer lenta la pagina o la renderizacion de los elementos.
    Con el virtual DOM, primero se hace en este el cambio, y despues se pasa al real y en este real solo se van a tener las actualizaciones reales que realmente se necesitaban 
    
    ### Uso de librerias y Frameworks:

        Introduccion: 
        Para entender lo que son las librerias y los frameworks en JS podemos pensar en la construccion de una casa.
        Podria ser dificil y tomaria mucho tiempo tener que hacer cada ladrillo y cada mueble a mano. 
        Por eso se compran los ladrillos hechos y muebles en una tienda.
        En programacion las librerias y frameworks son como ladrillos y muebles ya hechos, son pedazos de codigo que alguien mas escribio.

        ¿Que es una libreria?
            es una coleccion de funciones y metodos que se pueden usar en un desarrollo propio, son como una caja de herramientas,llena de dichas ehrramientas que se utilizan para resolver problemas espesificos. 

            ejemplo:
            Se podria usar una libreria para crear graficos en tu web incluso graficos 3D con libreias de js como Threejs y babylonJs, sin tener que escribir el codigo desde cero.

        ¿Que es un frameWork?
            es un poco mas complejo que una librería, si las librerias son como una caja de herramientas, los frameworks son como una casa prefabricada.
            proporciona una estructura basica para tu programa, junto con una conjuto de reglas sobre como deben hacer las cosas.
            Esto permite centrarse en las partes únicas de tu programa, mimentras que el framework se encarga de los detalles generales.
            Ejemplo:
            un framework proporciona una forma estandar de organizar archivos.
            de interactuar con bases de datos o de diseñar interfaz de usuario.
        
#### Como elegir una librerias o Frameworks?
    
    al igual que cuando se eligen los ladrillos y muebles para tu casa, importante elgir la libreria o el framework adecuado para tu proecto. estas son algunas que se deberian considerar

    - Necesidades del proyecto: algunas son buenos para ciertos tipos de proyectos, pero no para otros. 
    si se esta creando un juego se podria neceitar una libreria que sea buena para graficos y animaciones.

    - Tqamaño y rendimiento :
    Algunos son pensado y grandes, estos pueden relentizar tu pagina web, es importante elegir el mas ligero y rapido. 

    - Comunidad y soporte: 
    - Facilidad de aprendizaje


### Introduccion: Desarrollo Front-End

#### Que es el desarrollo front-end
    
    tambien es conociedo como desarrollo del lado del cliente

    ¿Que hace un desarrolladro Front-end ?
    es como el arquitecto y constructor del parque temaico, ellos crean y diseñan las atreacciones (Es decir las paginas web) para qeu sean interactivas y faciles de usar y accesibles para todos los visitantes. 

    Esto implica la elecion de colores y diseños agradables a la vista, (Usando HTML y css) la creacion de interacciones interesantes y la respuesta a las acciones del usuario (con js)
    y la garantia de que la pagina web se vea bien y funcione correctamente en una variedad de dispositivos y navegadores.
 

#### Reta tu conocimiento.

    1. lenguaje de programacion fundamental para la gestion de forms?

        js

    2. Cual es el objeto que se utiliza para acceder a los elementos individuales de un formulario en JS

        document

        // el otro dice que form

    3. supongamos que tenemos un formulario con el siguiente campo de entrada:
    <input type="text" id="nombre" name="nombre">
    ¿Cómo podemos obtener el valor actual del campo de entrada utilizando js?

        const valorNombre = document.getElementById('nombre').value

    4. ¿Cual es la forma comun de evaluar si un campo de entrada esta vacio?

        if(campo.validity.value.Missing)

    5. Que herramienta se utiliza para asociar una funcion de controlador de enventos a un evento espesifico en js.

        addEventListener

#### Complemento desarrollo front

    Complemento desarrollo front 

    #### Index.html

    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola mundo Vue</title>
        
    </head>
    <body>

        <form id="miFormulario">
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" placeholder="ingresa tu nombre" />

            <label for="email">Nombre: </label>
            <input type="email" id="email" placeholder="ingresa tu email" />

            <button type="submit">enviar</button>
            
        </form>

        //hay que tener en cuenta tambien el back para la construccion del formulario

        <script src="app.js"></script>
        
    </body>
    </html>

    #### app.js

    //Seleccionar el formulario
    let formulario = document.getelementById('miFormulario');

    //Escuchar el evento submit del formulario
    formulario.addEventListener('submit', function(event){
        //prevenir el comportamiento predeterminado del formulario
        //hasta que el usuario no yene la informacion esta no se envia
        event.preventDefault();

        //Validacion del campo nombre
        let nombre = document.getElementById('nombre').value
        if(nombre === ""){
            alert("el campo esta vacio.");
            return;
            //se pone retunr para 
        }

        //validacion del campo email usando una expresion regular
        let email = document.getElmentByid('email').value;
        let regex = /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!regex.text(email)){
            alert("ingresa un correo valido")
            return;
        }

        //envio del formulario con AJAX

    });

    // con AJAX se puede evitar que se recargue la pagina


    //esta funcion da un request para enviar el formulario
    //final mente lo envia, 
    //Se crea el objeto de la solicitud
    function enviarFomrularioConAjax(nombre email){

        //Esta es la interface que se genera
        let xhr = new XMLHttpRequest();

        //procesar.py es la url o endpoint donde se envia la ifnormacion
        xht.open('POST', 'procesar.py', true);
        // el argumento true indica que la solicitud se hara asincornica, siginifica que el codigo js continuara ejecutandose mientras espera la respuesta del servidor

        //se establecen las cabeceras cuando se envia la informacion 
        //se define el tipo de contenido que se va a enviar 
        //min estandar es decir que el formulario se va a enviar se codificara como un formulario tradicional
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onload = function(){
            if(this.status === 200){
                console.log(this.responseTest)
            }else{
                console.log("error al enviar el codigo de estado", this.estatus)
            }
        }

        xh.send('nombre= ' + nombre + '&email=' + email);


    }

#### API
    interface de programacion de aplicaciones
    posibilita la comunicacion entre dos aplicaciones: usuario servidor 
    back front, vista servicio etc.
    la aplicacion que envia la solicitud se llama cliente, y la que envia la respuesta se llama servidor.


## Unidad 4 Desarrollo de aplicativos web MInTic 
### Diseño Responsivo

### Reto de conocimiento unidad 4

    -que es el diseño responsivo en el desarrollo web 
        es una tecnica para diseñar sitios web que se adapten y respondan de manera optima a diferentes dispoisitivos y tamaños de pantallas 
    
    - por que es importante el diseño responsivo en el desarrollo web?
        Mejora el rendimiento y la optimizacion de sitios web

    - Cual de las siguientes tecnicas se utiliza en el diseño responsivo 
        media queries
    
    - Que unidad de medida es recomendsable utilizar para el diseño responsivo
        porcentajes


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

## Section 4

### Temas Puntuales de la sección

    - Composition Api
    - Script Setup
    - Define component
    - Single file Components
    - Separacion de Logica
    - Composables 
    - build de Producion
    - Despliegue a produccion 
    - Manejo de Estilos
        . Globales 
        . Bootstrap
        . Tailwind

### componente tradicional 

    Composable fuctions
    estos son mu parecidos a los hooks en react.

    Estos composables devuelven solo las partes del 
    componente que se van a a utilizar, es decir proporciona la 
    logica que se necesita para el compoenente, per este no incluye 



        

