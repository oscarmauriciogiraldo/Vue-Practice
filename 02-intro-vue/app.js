/**
 * @description hola mundo en vue
 * @argument createapp -> Cre ana app en vue 
 * @argument ref -> crea variables reactivas
 */
const {createApp, ref} = Vue;

const app = createApp ({
    //template literals
    template: `
        <h1>Hola mundo</h1>
        <h2>{{ message }}</h2>
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
/* EStas lineas de codigo crea la aplicacion en vue */
app.mount('#myApp');
