/* Axios es un fetch api con poderes
para instalarlo con el siguiente comando npm i axios */
import axios from 'axios';
import type { GIFResponse } from '../interfaces/gift.response';


const apiKey = '18m2ulEtMBRpTSfiQ7ZY69kSHqvC9SbW';


/* Instancia de axios */
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});

/* se puede hacer un export 
defaul o exportar como tal la constante */

giphyApi.get<GIFResponse>('/random')
    .then( resp => console.log(resp.data.data.images.downsized_large.url))
    .catch( err => console.log(err) );