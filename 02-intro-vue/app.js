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
        <p> desde la app.js <p>
    `
});
/* EStas lineas de codigo crea la aplicacion en vue */
