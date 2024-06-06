<template>
    <h1>Mi primera app</h1>
    <hr>
    <MyCounter :value="5" />
    <MyCounterScript :value="6" />
    <!-- Comunicar el componente hijo con el padre
    antes se utilizaba v-bind
    pero ahora se maneja mas con :y la propiedad.
    se manda el valor, ahora como se recibe 
    define props par al comunicacion entre padre e hijo 
    el hijo recibe las propiedades
    -->
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
/* import { defineComponent } from 'vue' */

/* export default defineComponent({
    setup() {
        
    },
}) */
</script>
