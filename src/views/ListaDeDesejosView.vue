<template>
  <main-layout>
    <v-container class="principal_desejo">
      <v-row>
        <v-col class="col_desejo titulo_poscionamento_desejo">
          <v-icon size="40" color="yellow darken-3">mdi-star</v-icon>
          <span class="c313 dongle-regular f40 posicionamento_texto_desejo">Lista de desejos</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col_desejo">
          <span v-if="quantidade<1" class="c313 dongle-light f35" > Sua Lista de desejos está vazia.</span>
          <span v-if="quantidade>0" class="c313 dongle-light f35" >{{
              quantidade
            }} produtos adicionados em sua lista de desejos</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="col_desejo">
          <scroll-home  :produtos="produtos"></scroll-home>

        </v-col>
      </v-row>

    </v-container>
  </main-layout>


</template>

<script>


import ScrollHome from "@/components/ScrollHome";
import MainLayout from "@/components/main-layout";
import {useFavoritosStore} from "@/store/store";
import ProdutoClient from "@/clients/produto-client";


export default {
  name: "ListaDeDesejosView",
  components: {
    MainLayout,

    ScrollHome,

  },
  data: () => ({

    produtos: [],
    controle:'',
    vazio: true,
    quantidade: 0
  }),

  computed:{

    recarregaPagina(){
      return useFavoritosStore().change
    }
  },

  watch: {

    recarregaPagina: function () {
      this.produtos = []
      this.findById()
      this.quantidade = this.produtos.length
    }
  },

  created: function () {

    this.findById()
    this.controle = this.produtos.length

    window.addEventListener('useFavoritosStore', this.handleFavoritosStoreChange);
  },
  beforeDestroy() {
    window.removeEventListener('useFavoritosStore', this.handleFavoritosStoreChange);
  },

  methods: {



    async    findById(){
      const getApi = new ProdutoClient();
      const valor = useFavoritosStore().listaFavoritos
      console.log(valor)

      valor.map((valor) => {

        getApi.findById(valor).then((produto) => {
          this.produtos.push(produto)
        this.quantidade=  this.produtos.length


        }).catch((error) =>{
          console.log(error);
        })

    })},



    // adicionaProdutos() {
    //
    //   for (let i = 0; i < 5; i++) {
    //     this.produtos.push({
    //       nome: "Calça",
    //       valorAtual: "100,23",
    //       imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
    //       favorite: true
    //     })
    //   }
    //   if (this.produtos.length == 0) {
    //     this.vazio = true;
    //   } else {
    //     this.vazio = false;
    //     this.quantidade = this.produtos.length;
    //   }
    // }
  },
  mounted: function () {
    // this.adicionaProdutos();
  }
}
</script>

<style scoped>

.principal_desejo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;
}

.titulo_poscionamento_desejo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.posicionamento_texto_desejo {
  margin-top: 8px;
  margin-left: 8px;
}

.col_desejo {
  margin: 0px;
  padding: 0px;
}

</style>