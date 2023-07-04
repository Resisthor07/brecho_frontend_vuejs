<template>
    <main-layout>
        <v-container>
            <v-row class="justify-center align-center py-5 border-bottom">
                <img src="../assets/payment.png" alt="Icone pagamento">
                <p class="dongle-light f40 ml-4 mb-0">Formas de pagamento</p>
            </v-row>
            <v-row>

                <v-col cols="8">
                    <v-radio-group v-model="venda.pagamento">
                        <v-radio class="mb-4" value="Vista">
                            <template v-slot:label>
                                <div class="dongle-light f30 c313">Dinheiro</div>
                            </template>
                        </v-radio>
                        <v-radio class="input-radio mb-4" value="MercadoPago">
                            <template v-slot:label>
                                <div class="dongle-light f30 c313">Cartão de crédito</div>
                            </template>
                        </v-radio>
                        <v-radio class="input-radio mb-4" value="Pix">
                            <template v-slot:label>
                                <div class="dongle-light f30 c313">Pix</div>
                            </template>
                        </v-radio>
                    </v-radio-group>
                    <v-row class="justify-end">
                        <v-btn class="botao-entrega mr-3" color="#7BB593" @click="adicionaPagamento()">
                            <p class="donwcase dongle-light f25 cfff mb-0">Confirmar o pedido</p>
                            <v-icon class="ml-3" color="white">mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
                <v-col cols="4" class="dongle-light valores-compra">
                    <p class="f40 mb-0">Resumo da compra</p>

                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30 mb-0">Subtotal</p>
                        <div class="f30 mb-0">{{ formataValor(this.venda.total) }}</div>
                    </v-col>
                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30 mb-0">Desconto</p>
                        <div class="f30 mb-0">{{ formataValor(this.desconto) }}</div>
                    </v-col>
                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30 mb-0">Frete</p>
                        <div class="f30 mb-0">{{ formataValor(this.frete) }}</div>
                    </v-col>
                    <hr>
                    <v-col class="d-flex flex-row justify-space-between py-0">
                        <p class="f30">Valor total</p>
                        <div class="f30 mb-0">{{ formataValor(this.frete + this.venda.total - this.desconto) }}</div>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';

import ProdutoClient from "@/clients/produto-client";
import { useSacolaStore } from "@/store/sacolaStore";
import VendaClient from "@/clients/venda-client";


export default {
    name: 'PagamentoView',
    components: {
        MainLayout
    },
    data: () => ({

        selectPagamento: null,
        desconto: 0,
        frete: 0,

        venda: {
            produtos: [],
            pagamento: null,
            cliente: {
                id: ''
            },
            total: 0,


        }
    }),

    created() {
        this.findById()
        this.venda.cliente.id = this.ClienteId

    },

    computed: {

        ClienteId() {
            return this.$route.params.id
        },


    },
    methods: {
        adicionaPagamento() {
            VendaClient.altera(this.venda)
                .then(response => {
                    this.venda.pagamento = this.selectPagamento;
                    this.venda.produtos = this.listaProdutos;
                    console.log(response);
                }).catch(error => {
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