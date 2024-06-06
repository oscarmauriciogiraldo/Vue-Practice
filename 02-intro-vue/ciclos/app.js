/* Frasaes de batman
 */
const originalQuotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

/* for (const quote of quotes){
    console.log(quote)
} */
/**
 * ref -> para poder modificar las variables 
 * estas son entonces variables reactivas, lo 
 * cual le permite tener mas control a vue
 */
const {createApp, ref, computed} = Vue;


const app = createApp({

    setup(){

        /* Se pretende oculatar alguna frase basado
        en algun valor */

        //const showAuthor = true;
        const showAuthor = ref(true);

        //Variable reactiva
        const quotes = ref(originalQuotes)

        //Propiedades computadas
        const totalQuotes = computed(() => {
            /* vue es lo suficientemente inteligente 
            para determinar que aca adentro si se hizo algun 
            cambio en algun valor reactivo el se va a dar cuenta y volvera 
            a procesar el computed por el desarrollador */
            return quotes.value.length;

            //forma corta
        });

        //Primera forma
        const toggleAuthor = () => {
            showAuthor.value = !showAuthor.value 
        }
        
        /**
         * @description agregar un elemento al final de la list .push
         * agregar un elemento al inicio de la lista .unshift
         */
        const aaddQuote = () => {
            //quotes.unshift('Hola mundo')
            /* Como estamos en js esto es permitido 
            pero no deberia de serlo por que los quotes tienen una estructura
            ya que tiene la frase y el author, por lo que es mejor hacer esta 
            desestructuracioon */
            quotes.value.unshift({quote: 'hola Mundo', author: 'Oscar Giraldo'})
        }


        return {
            quotes,
            showAuthor,
            toggleAuthor,
            aaddQuote,
            totalQuotes,
        }
    }
});

app.mount('#myApp');

