<template>
    <main-layout>
        <v-container class="d-flex flex-row">
            <v-row class="d-flex justify-center align-center">
                <v-col cols="12" lg="6" class="p-5">
                    <div class="w-100">
                        <img :src="this.produto.fotosDoProduto" alt="Imagem produto" style="max-width: 100%;">
                    </div>
                </v-col>
                <v-col cols="12" lg="6" class="d-flex flex-column justify-center align-start">
                    <p class="dongle-regular f40 c313 my-0">{{ this.produto.nome }}</p>

                    <article class="d-flex flex-row w-100 dongle-light f27 c313">
                        <p class="c313 my-0">Tam.: {{ this.produto.tamanho }}</p>
                    </article>

                    <p class="dongle-regular c313 f35">{{ formataValor(this.produto.valorAtual) }}</p>

                    <div class="borda-padrao" style="width: 100%; border-radius: 50%;"></div>

                    <p class="dongle-regular c313 f30">Descrição:</p>
                    <p class="dongle-light c313 f25 text-left">{{
                        this.produto.descricao
                    }}
                    </p>


                        <v-col  class="d-flex flex-column align-center">

                                <v-btn
                                    color="success"
                                    max-width="300"
                                    @click="adicionarAoCarrinho()">


                                    <v-icon
                                    class="mr-5"
                                    >mdi-plus-circle-outline</v-icon>
                                  Adicionar ao carrinho
                                </v-btn>
                              <router-link to="/">
                              <v-btn
                                  class="mt-5"
                                  min-width="290"

                              color="primary"
                              >Continuar comprando</v-btn>
                              </router-link>

                        </v-col>

                        <!-- <v-col cols="6" class="px-3">
                            <button class="btn-compra borda-padrao dongle-regular f25 c313">
                                <v-icon>mdi-plus-circle-outline</v-icon>

                            </button>
                        </v-col> -->

                    </v-col>


            </v-row>
          <v-snackbar
              color="success"
              class="d-flex justify-center"
              v-model="snackbar"
              :timeout="timeout"
          >
            {{ text }}


          </v-snackbar>
        </v-container>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';
import ProdutoClient from "@/clients/produto-client";
import { useSacolaStore } from "@/store/sacolaStore";
//import ProdutoClient from '@/clients/produto-client';

export default {
    name: "ProductDetail",
    components: {
        MainLayout
    },

    data: () => ({
        produto: Object,

      snackbar: false,
      text: 'Adicionado a sacola de compras.',
      timeout: 2000,
    }),

    computed: {
        Id() {
            return this.$route.query.id;
        }
    },

    created() {
        console.log(this.Id)
        this.findById(this.Id);


    },

    methods: {


        formataValor(valor) {
            return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        },

        async findById(id) {
            const getApi = new ProdutoClient();

            this.produto = await getApi.findById(Number(id));
            console.log(this.produto);

        },

        adicionarAoCarrinho: function () {
            useSacolaStore().adionarSacola(this.produto.id)
            console.log(this.produto.id + 'adicinado')
          this.snackbar=true
        }
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