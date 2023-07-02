<template>
    <main-layout>
        <v-container class="d-flex flex-row">
            <v-row class="d-flex justify-center align-center">
                <v-col cols="12" lg="6" class="p-5">
                    <div class="w-100">
                        <img src="../assets/camiseta.png" alt="Imagem produto" style="max-width: 100%;">
                    </div>
                </v-col>
                <v-col cols="12" lg="6" class="d-flex flex-column justify-center align-start">
                    <p class="dongle-regular f40 c313 my-0">Camiseta preta em algodão</p>

                    <article class="d-flex flex-row w-100 dongle-light f27 c313">
                        <p class="c313 mr-5 my-0">Condição: NOVO</p>
                        <p class="c313 my-0">Tam.: M</p>
                    </article>

                    <p class="dongle-regular c313 f35">R$149,49</p>

                    <div class="borda-padrao" style="width: 100%; border-radius: 50%;"></div>

                    <p class="dongle-regular c313 f30">Descrição:</p>
                    <p class="dongle-light c313 f25 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        placerat neque sem, interdum pretium massa
                        euismod id. Donec gravida laoreet mollis.
                    </p>
                    
                    <v-col class="row">
                        <v-col cols="6" class="px-3">
                            <v-sheet>
                                <button class="btn-compra borda-padrao">
                                    <v-icon>mdi-currency-usd</v-icon>
                                    <p class="dongle-light f25 c313 ma-0">Comprar</p>
                                </button>
                            </v-sheet>
                        </v-col>
                        <v-col cols="6" class="px-3">
                            <button class="btn-compra borda-padrao dongle-regular f25 c313">
                                <v-icon>mdi-plus-circle-outline</v-icon>
                                Add to cart
                            </button>
                        </v-col>
                    </v-col>
                
                </v-col>
            </v-row>
        </v-container>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';
//import ProdutoClient from '@/clients/produto-client';

export default {
    name: "ProductDetail",
    components: {
        MainLayout
    }
}
</script>

<style>
.btn-compra {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent !important;
    border-radius: 15px !important;
    width: 100%;
}
</style>