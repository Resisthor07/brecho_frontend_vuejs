<template>
    <v-app>
        <header-componente></header-componente>
        <v-main>
            <v-conteiner class="principal">
                <v-row>
                    <v-col>
                        <v-icon size="40" color="#ff1617">mdi-star</v-icon>
                        <span>Lista de desejos</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span v-if="quantidade != 0">{{ quantidade }} items adicionado(s) em sua lista</span>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col>
                        <scroll-home v-if="!vazio" :produtos="produtos"></scroll-home>
                        <h1 v-if="vazio">Sua lista de desejos está vazia</h1>
                    </v-col>
                </v-row>
            </v-conteiner>
        </v-main>
        <footer-componente></footer-componente>
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

    .principal
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
        margin-top: 30px;
    }

    .titulo
    {

    }

    .descricao
    {

    }

    .aviso
    {

    }

</style>