# Introduccion JavaScript 

## Unidad 2 MInTic 

### Funciones 

    LLas funciones en JavaScript son bloques de codigo reutilizables, las cuales otorga un mejor nivel y eficiencia. 

    - Una funcion se define como un conjunto de instrucciones logicamente ordenadas, para llevar a cabo una tarea espesifica 
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





        

