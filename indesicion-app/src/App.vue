<template>
    <h1>Mi primera app</h1>
    <hr>
    <MyCounter :value="1" />
    <MyCounterScript :value="2" />
    <MyCounterScript2 :value="3" />
    <!-- Comunicar el componente hijo con el padre
    antes se utilizaba v-bind
    pero ahora se maneja mas con :y la propiedad.
    se manda el valor, ahora como se recibe 
    define props par al comunicacion entre padre e hijo 
    el hijo recibe las propiedades
    -->
</template>

<script lang="ts" setup>
import MyCounterScript2 from './components/my-counter-script2/MyCounterScript2.vue';
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
/* import { defineComponent } from 'vue' */

/* export default defineComponent({
    setup() {
        
    },
}) */
</script>
