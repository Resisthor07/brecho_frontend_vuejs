<template>
    <v-main>
        <p class="texto_buscac">RESULTADO DA BUSCA: "{{ consulta }}"</p>
        <section class="organiza_buscac" v-if="!vazio">
            <div
            v-for="i in produtos"
            :key="i">
                <product-card :produto="i"></product-card>
            </div>
        </section>
        <div class="aviso_buscac">
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

    @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');


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
        font-family: "Dongle";
        font-size: 30px;
        font-weight: 400;
        font-style: normal;
        color: #313131;

    }

    .aviso_buscac
    {
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Dongle";
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        color: #313131;
    }

</style>