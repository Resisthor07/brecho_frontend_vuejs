<template>
    <main-layout>
        <v-container>
            <v-row class="justify-center align-center py-5 border-bottom">
                <img src="../assets/payment.png" alt="Icone pagamento">
                <p class="dongle-light f40 ml-4 mb-0">Formas de pagamento</p>
            </v-row>
            <v-row>
                <v-radio-group class="dongle-light">
                    <v-radio class="label" label="Dinheiro" value="1"></v-radio>
                    <v-radio class="label" label="Cartão de crédito" value="2"></v-radio>
                    <v-radio class="label" label="Pix" value="3"></v-radio>
                </v-radio-group>
            </v-row>
        </v-container>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';

// eslint-disable-next-line
export default {
    name: 'PagamentoView',
    components: {
        MainLayout
    }
}
</script>

<style scoped lang="scss">
.border-bottom {
    border-bottom: 1px solid black;
}

label{
    font-size: 500px;
}
</style>