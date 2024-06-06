
<template>
    
    <section>
        
        <h3>Square my counterscript logica separada: {{ squareCounter }}</h3>

        <div>
            <button @click="counter++"> + 1 </button>
            <button @click="counter--"> - 1 </button>
        </div>
    </section>
</template>

<script lang="ts"  src="./MyCounterScript2.ts"></script>

<!-- optional el estilo -->
<!-- scoped  es solo para aplicar estos estilos 
    a este componente  -->
<style scoped>
    h3{
        color: green;
    }
</style>