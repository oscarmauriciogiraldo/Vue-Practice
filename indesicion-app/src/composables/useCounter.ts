import { computed, ref } from "vue";

/**
 * Composable function 
 * @returns 
 * @description: se pretende entonces 
 * manejar la logica del counter, en este caso 
 * myCounter
 */
    //utilizar el initial value como una interfaz
//export const useCounter = (initialValue: number)

export const useCounter = (initialValue: number = 5) => {

    /**
     * @description: ppropiedades reactivas 
     * esta logica hace cierta funcion lo que hace que 
     * no se replique tanto la logica.
     * prop se recibe como argumento
     */
    const counter = ref(initialValue)
    //Propiedad computada para calcular el squere
    const squareCounter = computed(() => counter.value * counter.value)

    return{
        counter,
        squareCounter,

        //cuando sean propiedades de solo lectura
        //squareCounter = computed(() => counter.value * counter.value)
    
    }
}