<template>
  <v-app>
    <header-componente></header-componente>
    <v-main>
      <div class="div_buscav">
        <p class="caminho_buscav dongle-regular f30 c313">Home / {{ consulta }}</p>
      </div>
      <span></span>
      <resultado-busca-componente :vazio="vazio" :consulta="consulta" :produtos="produtos" ></resultado-busca-componente>
    </v-main>
    <footer-componente></footer-componente>
  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import FooterComponente from "@/components/footer-componente";
import ResultadoBuscaComponente from "@/components/resultadobusca-componente";
import ProdutoClient from "@/clients/produto-client";


export default {
  name: "resultadoBuscaView",
  components: {
    HeaderComponente,
    ResultadoBuscaComponente,
    FooterComponente
  },
  data: () => ({
    produtos: [],
    items: [],
    vazio: true,
    consulta: String
  }),

  computed: {

    tipo() {
      return this.$route.params.tipo
    }



  },

  watch: {
    tipo: function (valor) {
      this.findByTipo(valor)
    }
  },

  methods: {

    async findByTipo(valor) {
      const getApi = new ProdutoClient();
      this.produtos = await getApi.findByTipo(valor)
      this.consulta = this.tipo
      console.log(this.produtos)


    },

    atribuiItems() {
      this.items.push({
        text: 'Home',
        disabled: true
      })
      this.items.push({
        text: this.consulta,
        disabled: true
      })
    },
    atribuiConsulta() {
      this.consulta = this.tipo
    },
    buscaProdutos() {
      for (let i = 0; i < 9; i++) {
        this.produtos.push({
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        })
      }
      if (this.produtos.length == 0) {
        this.vazio = true;
      } else {
        this.vazio = false;
      }
    }
  },
  mounted () {
    this.atribuiConsulta();
    this.buscaProdutos();
    this.atribuiItems();
    this.findByTipo(this.tipo)
  }
}

</script>

<style scoped>

.caminho_buscav {
  
  margin-left: 60px;
  margin-bottom: 0px;

}

.div_buscav {
  width: 100%;
  border-bottom: 4px solid #FFD0D0;
  display: flex;
  align-items: center;
}

    
</style>