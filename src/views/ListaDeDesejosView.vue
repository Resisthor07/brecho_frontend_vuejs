<template>
  <main-layout>
    <v-container class="principal_desejo">
      <v-row>
        <v-col class="col_desejo titulo_poscionamento_desejo">
          <v-icon size="40" color="#ff1617">mdi-star</v-icon>
          <span class="titulo_desejo">Lista de desejos</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col_desejo">
          <span class="descricao_desejo" >{{
              quantidade
            }} items adicionado(s) em sua lista</span>
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
    vazio: true,
    quantidade: 0
  }),

  watch: {

   recarregaPagina: function (newVal) {
     console.log(newVal)
       this.findById()
  }
  },

  created: function () {

    this.findById()



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

@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

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

.titulo_desejo {
  font-family: "Dongle";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #313131;
  margin-top: 8px;
  margin-left: 8px;
}

.descricao_desejo {
  font-family: "Dongle";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  color: #313131;
  margin: 0px;
  padding: 0px;
}

.aviso_desejo {
  font-family: "Dongle";
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  color: #313131;
}

.col_desejo {
  margin: 0px;
  padding: 0px;
}

</style>