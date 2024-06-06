<!-- Ahora este es el primer componente }que se va a llamar  -->

<!-- Este es eñ unico componente que permite 
el nombre del componente con una sola palabra  
sfc -->
<template>
    <!-- <h1>Hola Vue</h1> -->
    <!-- Eventos y estados -->
    <section>
        <h3>counter: {{ counter }}</h3>
        <h3>Square: {{ 10 * 10 }}</h3>
        <h3>Square2: {{ counter * counter }}</h3>
        <h3>Square3: {{ squareCounter }}</h3>

        <div>
            <button @click="counter++"> + 1 </button>
            <button @click="counter--"> - 1 </button>
        </div>
    </section>
</template>
<!-- Si no se refrescan los cambios 
entonces ctrl shif y reload  -->

<!-- Forma corta para decir que se 
    trabaja con composition api -->
<script lang="ts" setup>
    import { computed, ref } from 'vue';

    /* Basado en el counter puedo saber cual es el valor cuadrado */
    //se define una variable reactiva
    const counter = ref(2)

    //Propiedad computada para calcular el squere
    const squareCounter = computed(() => counter.value * counter.value)

    /* console.log('hola mundo'); */
</script>

<!-- optional el estilo -->
<!-- scoped  es solo para aplicar estos estilos 
    a este componente  -->
<style scoped>
    h1{
        color: green;
    }
</style>