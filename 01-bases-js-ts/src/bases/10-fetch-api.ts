/* la idea es despues trabajr con variables de entorno
 */

const apiKey = '18m2ulEtMBRpTSfiQ7ZY69kSHqvC9SbW';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    //.then(resp => console.log(resp))
    .then((resp) => resp.json())
    /* .then(resp => {
        return resp.json()
    }) */
    //.then((body) => console.log(body))
    .then(({data}) => console.log({data}))
    //no hay ninguntipo de data particular typescriopt no tien ecomo saber que data viene
    .catch(err => console.info(err));