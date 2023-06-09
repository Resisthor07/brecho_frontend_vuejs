<template>
    <v-main>
        <p class="ajusta_buscac">RESULTADO DA BUSCA: "{{ consulta }}"</p>
        <section class="organiza_buscac">
            <div
            v-for="i in produtos"
            :key="i">
                <product-card :produto="i"></product-card>
            </div>
        </section>
    </v-main>
</template>
  
<script>
  
    import ProductCard from "@/components/productCard";
    
    export default {
        name: "ResultadoBuscaComponente",
        components: {
            ProductCard
        },
        methods: {
            
        },
        props:{
            consulta: String,
            produtos: Object
        }
  
  
  }
</script>
  
<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');


    .organiza_buscac
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .ajusta_buscac
    {
        margin-left: 60px;
        font-family: "Dongle";
        font-size: 30px;
        font-weight: 400;
        font-style: normal;
    }

</style>