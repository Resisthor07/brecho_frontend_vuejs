<template>
    <div>
        <v-row class="pa-0 ma-0">
            <v-col cols="2" class="pa-0 ma-0">
                <AdmMenuLateral />
            </v-col>
            <v-col class="pa-0 ma-0">
                <div class="tabela"></div>
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
import AdmMenuLateral from '@/components/AdmMenuLateral.vue'
export default {
    name: 'PaginaAdm',
    data() {
        return {

        }
    },
    components: {
        AdmMenuLateral
    }
}
</script>
<style lang="scss" scoped>
.h-tela {
    height: 100vh;
}

.pa-0 {
    padding: 0;
}

.ma-0 {
    margin: 0;
}

$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;
$font-color: white;

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

.grow {
    flex-grow: 1;
    flex-basis: 0;
}

.button:hover {
    background-color: $button-togle-color;
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
    font-size: 1.5em;
}

.d-flex {
    display: flex;
}

.flex-column {
    flex-direction: column;
}
</style>