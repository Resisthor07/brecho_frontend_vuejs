<template>

  <main-layout>
   <v-container>
     <v-row>
       <v-col class="flex justify-center">
         <v-icon size="40" color="#ff1617">mdi-shopping-outline</v-icon>
         <span class="c313 dongle-regular f40 posicionamento_texto_desejo">Sacola de Compras</span>
       </v-col>
     </v-row>
     <v-row>
       <v-col class="flex justify-center">
          <span class="c313 dongle-light f35" >{{
              quantidade
            }} items adicionado(s) em sua lista</span>
       </v-col>
     </v-row>

    <produto-sacola :produto="produtos"></produto-sacola>



    </v-container>
    <v-divider vertical></v-divider>
  </main-layout>

  
</template>
  
<script>
import MainLayout from '@/components/main-layout';
//import {useSacolaStore} from "@/store/sacolaStore";
import ProdutoClient from "../clients/produto-client"
import {useFavoritosStore} from "@/store/store";
import ProdutoSacola from "@/components/ProdutoSacola";

export default {
  name: "sacolaCompras",
  components: {
    ProdutoSacola,
    MainLayout    
},
  data: () => ({


    ProdutoClient: new ProdutoClient(),
    produtos: [],

    vazio: true,
    quantidade:''
  }),
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

        }).catch((error) =>{
          console.log(error);
        })
      })},

    // async findById(){
    //
    //
    //   const valor = useSacolaStore().listaSacola
    //   console.log(valor)
    //
    //   valor.map((valor) => {
    //
    //     this.ProdutoClient.findById(valor).then((produto) => {
    //       this.produtos.push(produto)
    //     this.quantidade=  this.produtos.length
    //
    //     }).catch((error) =>{
    //       console.log(error);
    //     })
    //
    // })},

   
  },
  mounted: function () {
    // this.adicionaProdutos();
  }



}






</script>
  
<style scoped lang="scss">

  .titulo_sacola{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    
  }


  .col{
    display: flex;
    flex-direction: row;
  }

  .col-sm-12{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .col-sm-8{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .col-sm-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  
  .row-preco{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  
</style>