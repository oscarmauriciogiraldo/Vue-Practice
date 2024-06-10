import { computed, ref } from "vue";

/**
 * Composable function 
 * @returns 
 * @description: se pretende entonces 
 * manejar la logica del counter, en este caso 
 * myCounter
 */
export const useCounter = () => {

    /**
     * @description: ppropiedades reactivas 
     * esta logica hace cierta funcion lo que hace que 
     * no se replique tanto la logica.
     * prop se recibe como argumento
     */
    const counter = ref(5)
    //Propiedad computada para calcular el squere
    const squareCounter = computed(() => counter.value * counter.value)

    return{
        counter,
        squareCounter,

        //cuando sean propiedades de solo lectura
        //squareCounter = computed(() => counter.value * counter.value)
    
    }
}