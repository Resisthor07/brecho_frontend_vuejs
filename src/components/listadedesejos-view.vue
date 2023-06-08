<template>
    <v-app>
        <v-main>
            <header-componente></header-componente>
            <product-card :produto="produtos"></product-card>
            <footer-componente></footer-componente>
        </v-main>
    </v-app>
    
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import FooterComponente from "@/components/footer-componente";
import ProductCard from "@/components/productCard";

    export default{
        name: "listaDeDesejosView",
        components: {
            HeaderComponente,
            ProductCard,
            FooterComponente
        },
        data: () => ({
            produtos:[
            {
                nome: "Calça",
                valorAtual: "100,23",
                imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                favorite: true
            }
        ]
        })
    }
</script>

<style>

</style>