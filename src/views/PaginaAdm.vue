<template>
    <div>
        <v-row class="pa-0 ma-0">
            <v-col cols="2" class="pa-0 ma-0">
                <!--Menu lateral-->
                <v-container class="cor-de-fundo h-tela pa-0 ma-0">
                    <div class="d-flex align-center justify-center h-10">
                        <h2 class="font-family font-title font-size font-style font-color">Brecho flor da fronteira</h2>
                    </div>
                    <v-divider color="white"></v-divider>
                    <div class="d-flex flex-column h-70">
                        <div class="h-70 d-flex flex-column justify-space-between">
                            <router-link class="mt-fc-20" :to="{ name: rotas[i] }" v-for="(titulo, i) in titulosDosBotoes"
                                :key="titulo">
                                <v-btn @click="$emit('seleciona-item', titulo)"
                                    class="border-radius-0 cor-de-fundo font-color flat d-flex justify-start no-uppercase w-100 "><v-icon
                                        class="h-icone">{{
                                            iconesBotoes[i] }}</v-icon>{{
        titulo
    }}</v-btn>
                            </router-link>
                        </div>
                    </div>
                    <v-divider color="white"></v-divider>
                    <div class="d-flex h-20">
                        <v-btn class="border-radius-0 cor-de-fundo font-color flat d-flex grow h-100">Sair<v-icon
                                class="h-icone ml-10">fa-solid
                                fa-arrow-right-from-bracket</v-icon></v-btn>
                    </div>
                </v-container>
            </v-col>
            <v-col class="pa-0 ma-0">
                <router-view />
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
// import AdmMenuLateral from '@/components/AdmMenuLateral.vue'
export default {
    name: 'PaginaAdm',
    data: () => {
        return {
            titulosDosBotoes: ['Inicio', 'Produtos', 'Cadastro de Produtos', 'Pedidos', 'Configuracoes gerais'],
            rotas: ['login', 'produtos', 'cadastro-produtos', 'pedidos', 'configuracoes'],
            iconesBotoes: ["fa-solid fa-house", "fa-solid fa-basket-shopping", "fa-solid fa-plus", "fa-solid fa-box-open", "fa-solid fa-gear"],
        }
    },
    components: {
        // AdmMenuLateral
    }
}
</script>
<style lang="scss">
$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;
$font-color: white;

.h-tela {
    height: 100vh;
}

.w-100 {
    width: 100%;
}

.pa-0 {
    padding: 0;
}

.ma-0 {
    margin: 0;
}

.mt-10 {
    margin-top: 10px;
}

.ml-10 {
    margin-left: 10px;
}

.h-icone::before {
    font-size: 16px;
    margin-right: 10px;
}

.mt-fc-20:first-child {
    margin-top: 20px;
}

.h-70 {
    height: 70%;
}

.button {
    background-color: $backgroud-primary-color;
    border: none;
    height: 50px;
    color: $font-color;
    font-family: 'Dongle', sans-serif;
    font-weight: lighter;
    font-size: 1em;
    text-transform: none;
}

.button:hover {
    background-color: $button-togle-color;
}

.grow {
    flex-grow: 1;
    flex-basis: 0;
}

.bg-color-primary {
    background-color: $backgroud-primary-color;
}

.borders-bt {
    border-style: solid none;
    border-width: 1px;
    border-color: white;
}

.font-color {
    color: white;
}

.font-big {
    font-size: 2em;
}

.d-flex {
    display: flex;
}

.flex-column {
    flex-direction: column;
}

.cor-de-fundo {
    background-color: #FF7272 !important;
}

.h-title {
    height: 90px;
}

.h-10 {
    height: 10%;
}

.h-20 {
    height: 20%;
}

.h-70 {
    height: 70%;
}

.h-100 {
    height: 100%;
}

.font-color {
    color: white !important;
}

.no-uppercase {
    text-transform: none !important;
}

.flat {
    box-shadow: none;
}

.justify-start {
    justify-content: start;
}

.font-style {
    font-family: 'Dongle', sans-serif;
}

.font-size {
    font-size: 1.7em;
    font-weight: 300;
}

.d-flex {
    display: flex !important;
}

.flex-column {
    flex-direction: column;
}

.align-center {
    align-items: center;
}

.justify-space-between {
    justify-content: space-between;
}

.borders-bt {
    border-style: solid none;
    border-width: 1px;
    border-color: white;
}

.justify-center {
    justify-content: center;
}

.border-radius-0 {
    border-radius: 0;
}

.grow {
    flex-grow: 1;
    flex-basis: 0;
}

.background-none {
    background-color: none !important;
}

.background-white {
    background: white !important;
}

.opacity-0 {
    opacity: 0 !important;
}

.opacity-1 {
    opacity: 1 !important;
}
</style>