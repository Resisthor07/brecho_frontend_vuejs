<template>
    <main-layout>
        <v-container>
            <v-row class="justify-center align-center py-5 border-bottom">
                <img src="../assets/payment.png" alt="Icone pagamento">
                <p class="dongle-light f40 ml-4 mb-0">Formas de pagamento</p>
            </v-row>
            <v-row>
                <v-col cols="8">
                    <v-radio-group v-model="selectPagamento">
                        <v-radio class="mb-4" value="dinheiro">
                            <template v-slot:label>
                                <div class="dongle-light f30 c313">Dinheiro</div>
                            </template>
                        </v-radio>
                        <v-radio class="input-radio mb-4" value="cartao">
                            <template v-slot:label>
                                <div class="dongle-light f30 c313">Cartão de crédito</div>
                            </template>
                        </v-radio>
                        <v-radio class="input-radio mb-4" value="pix">
                            <template v-slot:label>
                                <div class="dongle-light f30 c313">Pix</div>
                            </template>
                        </v-radio>
                    </v-radio-group>
                    <v-row class="justify-end">
                        <v-btn class="botao-entrega mr-3" color="#7BB593" @click="adicionaPagamento()">
                            <p class="donwcase dongle-light f25 cfff mb-0">Seguir para entrega</p>
                            <v-icon class="ml-3" color="white">mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
                <v-col cols="4" class="dongle-light valores-compra">
                    <p class="f40 mb-0">Resumo da compra</p>

                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30 mb-0">Subtotal</p>
                        <div class="f30 mb-0">R$ 69,99</div>
                    </v-col>
                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30 mb-0">Desconto</p>
                        <div class="f30 mb-0">R$ 69,99</div>
                    </v-col>
                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30 mb-0">Frete</p>
                        <div class="f30 mb-0">R$ 69,99</div>
                    </v-col>
                    <hr>
                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30">Valor total</p>
                        <div class="f30 mb-0">R$ 69,99</div>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';
import VendaClient from '@/clients/venda-client';

// eslint-disable-next-line
export default {
    name: 'PagamentoView',
    components: {
        MainLayout
    },
    data: () => ({
        venda: {
            produtos: [],
            pagamento: null
        }
    }),
    computed: {
        listaProdutos() {
            return this.$store.state.listaProdutos
        },
        cliente(){
            return this.$route.query.id
        }

    },
    methods: {
        adicionaPagamento() {
            VendaClient.altera(this.venda)
                .then(response => {
                    this.venda.pagamento = this.selectPagamento;
                    this.venda.produtos = this.listaProdutos;
                    this.venda.cliente = this.cliente();
                    console.log(response);  
                }).catch (error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style scoped lang="scss">
.border-bottom {
    border-bottom: 1.8px solid black;
}

label {
    font-size: 500px;
}

.valores-compra {
    border-left: 1.8px solid black;
}

.botao-entrega {
    border-radius: none;
    box-shadow: none;
}
</style>