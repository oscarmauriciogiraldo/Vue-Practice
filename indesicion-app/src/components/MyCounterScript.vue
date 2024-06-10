
<template>
    
    <section>

        <h1>Counter script setup tradicional</h1>
        
        <h3>Square my counterscript: {{ squareCounter }}</h3>

        <div>
            <button @click="counter++"> + 1 </button>
            <button @click="counter--"> - 1 </button>
        </div>
    </section>
</template>

<script lang="ts">
    import { useCounter } from '@/composables/useCounter';
import { defineComponent, ref, computed } from 'vue';
    export default defineComponent({
        props: {
            value : {type: Number, required: true}
        },

        setup(props){

            //logica resumida en un composable
        const { counter, squareCounter } = useCounter(props.value);


            //ahora esta logica se resume
            //const counter = ref(props.value);
            //const squareCounter = computed( () => counter.value * counter.value);

            return{
                counter,
                squareCounter,
            }
        },



    })
   
</script>

<!-- optional el estilo -->
<!-- scoped  es solo para aplicar estos estilos 
    a este componente  -->
<style scoped>
    h1{
        color: green;
    }
</style>