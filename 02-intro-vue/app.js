/**
 * @description hola mundo en vue
 * Este ola mundo es progresivo, se utiliza un cdn 
 * solamente para que algunos componentes o algunas secciones de mi Html 
 * utilicen VUE
 * @argument createapp -> Cre ana app en vue 
 * @argument ref -> crea variables reactivas
 */
const {createApp, ref} = Vue;


//Componente
const app = createApp ({
    //template literals
    /* template: `
        <h1>Hola mundo</h1>
        <h2>{{ message }}</h2>
        <h2>{{ author }}</h2>

        <p> desde la app.js <p>
    `, */
    //Variables reactivas - Inicio Composition Api
    //Setup() => Funcion especial del ciclo de vida de los componentes 
    setup(){

        //const message = "I'm Batman";
        //Esto crea la variable reactiva
        const message = ref("I'm Batman");
        const author = ref('Bruce Wayne');

        //Funcion
        /**
         * @description: se debe exportar la funcion 
         * em el return
         */
        const changequote = () => {
            message.value = 'Hola, soy goku'
            author.value = 'Kakaroto;'
            
        }

        /* Ejercicio
        Author : bruce wane  */

        /* setTimeout(()=>{
            message.value = 'Soy Goku';
            author.value = 'Kakaroto;'
        }, 1500); */

        return{
            message,
            author,
            changequote,
        }
    }
});
/* EStas lineas de codigo crea la aplicacion en vue */
app.mount('#myApp');
