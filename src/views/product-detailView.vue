<template>
    <main-layout>
        <v-container class="d-flex flex-row">
            <v-col cols="6">
                <img src="../assets/camiseta.png" alt="Imagem produto">
            </v-col>
            <v-col cols="6" class="d-flex flex-column align-start">
                <p>Camiseta</p>
                <article>
                    <p>Condição: NOVO</p>
                    <p>Tam.: M</p>
                </article>
                <div class="borda-padrao w-100"></div>
                <p>Descrição:</p>
                <article>
                    <input type="button" value="Comprar">
                    <input type="button" value="Add to cart">
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