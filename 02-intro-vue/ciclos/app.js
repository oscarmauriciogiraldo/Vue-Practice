/* Frasaes de batman
 */
const quotes = [
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
const {createApp, ref} = Vue;


const app = createApp({

    setup(){

        /* Se pretende oculatar alguna frase basado
        en algun valor */

        //const showAuthor = true;
        const showAuthor = ref(true);

        //Primera forma
        const toggleAuthor = () => {
            showAuthor.value = !showAuthor.value 
        }


        return {
            quotes,
            showAuthor,
            toggleAuthor,
        }
    }
});

app.mount('#myApp');

