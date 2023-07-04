<template class="d-flex flex-column">
  <main-layout>
    <v-container>
      <v-row class="flex-row align-center">

        <v-col class="flex justify-center align-content-center">
          <v-icon size="40" color="#ff1617">mdi-shopping-outline</v-icon>
          <span class="c313 dongle-regular f40 posicionamento_texto_desejo ml-6">Sacola de Compras</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="flex justify-center">
          <span v-if="quantidade > 0" class="c313 dongle-light f35">{{
            quantidade
          }} produtos adicionados em sua sacola de compras</span>
          <span v-if="quantidade < 1" class="c313 dongle-light f35">{{
            quantidade
          }} Sua sacola de compras está vazia.</span>


        </v-col>

      </v-row>
      <v-divider color="black"></v-divider>
      <v-row>

        <v-col cols="12" sm=9>
          <v-list-item-group class="flex-column">
            <v-list-item class="d-flex flex-column justify-center align-center" v-for="produtos in produtos"
              :key="produtos.id">

              <produto-sacola :produto="produtos"></produto-sacola>
            </v-list-item>
          </v-list-item-group>
          <router-link to="/">
            <v-btn v-if="quantidade < 1" class="mt-16" color="primary" x-large>

              <v-icon>mdi-arrow-left</v-icon>
              Aproveite nossos produtos e faça suas compras.
            </v-btn>
          </router-link>
        </v-col>
        <v-divider class="mt-3" vertical color="black"></v-divider>
        <v-col cols="12" sm="3">
          <h3 class="d-flex justify-center mb-16"> Resumo da Compra</h3>
          <v-row class="ml-3 d-flex justify-space-between">
            <h5>Subtotal </h5>

            <h5> {{ formataValor(this.valorTotal) }}</h5>

          </v-row>
          <v-row class="ml-3 mt-5 justify-space-between">
            <h5>Desconto </h5>

            <h5> {{ formataValor(this.Desconto) }}</h5>

          </v-row>
          <v-row class="ml-3 mt-5 d-flex justify-space-between">
            <h5>Frete </h5>

            <h5> {{ formataValor(this.frete) }}</h5>

          </v-row>
          <v-divider class="mt-3" color="black"></v-divider>
          <v-row class="ml-3 mt-5 d-flex justify-space-between">
            <h5>Valor Total </h5>

            <h5> {{ formataValor(this.frete + this.valorTotal - this.Desconto) }}</h5>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <router-link to="/cliente-cadastro">
                <v-btn color="success" width="270" height="40"> Finalizar Compra</v-btn>
              </router-link>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <router-link to="/">
                <v-btn color="primary" large>

                  <v-icon>mdi-arrow-left</v-icon>
                  Continuar comprando
                </v-btn>
              </router-link>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
      <v-col>


      </v-col>
    </v-container>

  </main-layout>
</template>

<script>
import MainLayout from '@/components/main-layout';

import ProdutoClient from "../clients/produto-client"

import ProdutoSacola from "@/components/ProdutoSacola";
import { useSacolaStore } from "@/store/sacolaStore";


export default {
  name: "sacolaCompras",
  components: {
    ProdutoSacola,
    MainLayout
  },

  data: () => ({

    valorTotal: 0.0,
    Desconto: 0,
    frete: 0,
    ProdutoClient: new ProdutoClient(),
    produtos: [],

    vazio: true,
    quantidade: ''
  }),

  computed: {
    recarregaPagina() {
      return useSacolaStore().change
    }

  },


  watch: {
    recarregaPagina: function () {
      this.produtos = []
      this.findById()
      this.quantidade = 0
    }

  },

  created: function () {

    this.findById()
    window.addEventListener('useSacolaStore', this.handleuseSacolaStoreChange)
  },
  beforeDestroy() {
    window.removeEventListener('useSacolaStore', this.handleuseSacolaStoreeChange);
  },


  methods: {
    formataValor(valor) {
      return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    },

    async findById() {

      const getApi = new ProdutoClient();
      const valor = useSacolaStore().listaSacola
      console.log(valor)

      valor.map((valor) => {

        getApi.findById(valor).then((produto) => {
          this.produtos.push(produto)
          console.log(this.produtos)
          this.quantidade = this.produtos.length
          console.log(this.produtos.valorAtual)
          this.valorTotal = this.valorTotal + produto.valorAtual

        }).catch((error) => {
          console.log(error);
        })
      })
    },
  },
  mounted: function () {
    // this.adicionaProdutos();
  }


}


</script>

<style scoped lang="scss">
.titulo_sacola {
  align-items: flex-start;
  display: flex;
  flex-direction: column;

}


.col {
  display: flex;
  flex-direction: row;
}

.col-sm-12 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.col-sm-8 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.col-sm-4 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}


.row-preco {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>