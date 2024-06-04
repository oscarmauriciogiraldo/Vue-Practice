/* Funcion asincrona */

import type { GIFResponse } from "../interfaces/gift.response";
import { giphyApi } from "./11-axios";

/**
 * 
 * @returns 
 * @description: async y awit:
 * async -> regresa una promesa, es decir transforma la funcion 
 * en una funcion que devuelve una promesa.
 * 
 * tiene una ventaja de ejecutar codigo asincrono, como 
 * si fuera codigo sincrono.
 * 
 * en la practica pasada se establecio la siguiente funcion:
 * @example: 
 * 
 * const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
        params:{
            api_key: apiKey,
        }
    });

 * giphyApi.get<GIFResponse>('/random')
    .then( resp => console.log(resp.data.data.images.downsized_large.url))
    .catch( err => console.log(err) );
 * 
 */
export const getImage = async() => {

    /**
     * todo esto hace la peticion htttp,
     * cuando se hace el awit de una promesa 
     * lo que se tiene el valor de retorno es el valor exactamente si 
     * la promesa se resolviera de manera exitosa
     * 
     * Como manejar las exepciones si algo falla
     * dentro de funciones asincronas se manejan con try catch
    */
    try{
        const resp = await giphyApi.get<GIFResponse>('/random');
        return resp.data.data.images.downsized_large.url
    }catch(error){
        //varias maneras de hacerlo
        //return 'image url no encontrado'
        throw 'Url no encontrado'
    }

    //giphyApi.get('/random');
    /* const resp = await giphyApi.get<GIFResponse>('/random');

    //return 'https://url-de-mi-sitio-web/image1.gpg'
    return resp.data.data.images.downsized_large.url */
}

/* Esta funcion es igual a la siguiente
las dos funciones hacen exactamente lo mismo  */
/* export const getImagePromose = () => {
    return new Promise( resolve => {
        resolve('https://url-de-mi-sitio-web/image1.gpg');
    })
} */


//console.log('funcion async', getImage());
//console.log('Funcion normal', getImagePromose())
getImage()
    .then((url) => console.log({url}))
    .catch(error => console.log(error));

