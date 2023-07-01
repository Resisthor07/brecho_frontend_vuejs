<template>
    <v-container class="cor-de-fundo h-tela pa-0 ma-0">
        <div class="d-flex align-center justify-center h-10">
            <h2 class="font-family font-title font-size font-style font-color">Brecho flor da fronteira</h2>
        </div>
        <v-divider color="white"></v-divider>
        <div class="d-flex flex-column h-70">
            <v-btn class="border-radius-0 cor-de-fundo font-color flat d-flex justify-start no-uppercase"
                v-for="titulo in titulosDosBotoes" :key="titulo">{{
                    titulo
                }}</v-btn>
        </div>
        <v-divider color="white"></v-divider>
        <div class="d-flex h-20">
            <v-btn class="border-radius-0 cor-de-fundo font-color flat d-flex grow h-100">Sair</v-btn>
        </div>
    </v-container>
</template>
<script lang="ts">
export default {
    name: 'AdmMenuLateral',
    data() {
        return {
            titulosDosBotoes: ['Inicio', 'Vendas', 'Pedidos', 'Configuracoes gerais'],
        }
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

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
</style>