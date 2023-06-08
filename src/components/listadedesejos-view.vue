<template>
    <v-app>
        <v-main>
            <header-componente></header-componente>
            <scroll-home v-if="!vazio" :produtos="produtos"></scroll-home>
            <h1 v-if="vazio">Sua lista de desejos está vazia</h1>
            <footer-componente></footer-componente>
        </v-main>
    </v-app>
    
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import FooterComponente from "@/components/footer-componente";
import ScrollHome from "@/components/ScrollHome";


    export default{
        name: "listaDeDesejosView",
        components: {
            HeaderComponente,
            ScrollHome,
            FooterComponente
        },
        data: () => ({
            produtos:[],
            vazio: true,
            quantidade: 0
        }),
        methods: {
            adicionaProdutos(){
                for(let i=0;i<0;i++)
                {
                    this.produtos.push({
                        nome: "Calça",
                        valorAtual: "100,23",
                        imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                        favorite: true
                    })
                }
                if(this.produtos.length == 0)
                {
                    this.vazio = true;
                }
                else
                {
                    this.vazio = false;
                    this.quantidade = this.produtos.length;
                }
            }
        },
        created: function(){
            this.adicionaProdutos();
        }
    }
</script>

<style>

</style>