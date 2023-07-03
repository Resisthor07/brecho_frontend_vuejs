<template>
    <v-main>
        <p class="texto_buscac dongle-regular c313 f30">RESULTADO DA BUSCA: "{{ consulta }}"</p>
        <section class="organiza_buscac" v-if="!vazio">
            <div
            v-for="i in produtos"
            :key="i">
                <product-card :produto="i"></product-card>
            </div>
        </section>
        <div class="aviso_buscac dongle-regular c313 f40">
            <h1 v-if="vazio">Nenhum resultado para esta busca</h1>
        </div>
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
            produtos: Object,
            vazio: Boolean
        }
  
  
  }
</script>
  
<style scoped>


    .organiza_buscac
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .texto_buscac
    {
        margin-top: 20px;
        margin-left: 60px;
    }

    .aviso_buscac
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>