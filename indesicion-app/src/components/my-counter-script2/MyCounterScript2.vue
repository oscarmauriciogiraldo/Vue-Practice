
<template>
    
    <section>
        
        <h3>Square my counterscript logica separada: {{ squareCounter }}</h3>

        <div>
            <button class="btn" @click="counter++"> + 1 </button>
            <button class="btn" @click="counter--"> - 1 </button>
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

    .btn{
        @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
    }
</style>