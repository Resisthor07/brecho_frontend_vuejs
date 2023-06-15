<template>
    <main-layout>
        <v-container class="d-flex flex-row">
            <v-col cols="6">
                <img src="../assets/camiseta.png" alt="Imagem produto" class="w-100">
            </v-col>
            <v-col cols="6" class="d-flex flex-column justify-center align-start">
                <p class="dongle-regular f40 c313 my-0">Camiseta preta em algodão</p>
                <article class="d-flex flex-row w-100 dongle-light f27 c313">
                    <p class="c313 mr-5 my-0">Condição: NOVO</p>
                    <p class="c313 my-0">Tam.: M</p>
                </article>
                <p class="dongle-regular c313 f35">R$149,49</p>
                <div class="borda-padrao"></div>
                <p class="dongle-regular c313 f30">Descrição:</p>
                <p class="dongle-light c313 f25 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    placerat neque sem, interdum pretium massa
                    euismod id. Donec gravida laoreet mollis.</p>
                <article class="d-flex flex-row w-100">
                    <v-btn class="mr-3 borda-padrao">
                        <v-icon>mdi-currency-usd</v-icon>
                        <p class="dongle-regular f25 c313 ma-0">Comprar</p>
                    </v-btn>
                    <v-btn class="borda-padrao dongle-regular f30">
                        <v-icon>mdi-plus-circle-outline</v-icon>
                        <p class="dongle-regular f25 c313 ma-0">Add to cart</p>
                    </v-btn>
                </article>
            </v-col>
        </v-container>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';

export default {
    name: "ProductDetail",
    components: {
        MainLayout
    }
}
</script>