<template>

  <main-layout>
  
    <v-conteiner>

      <v-row class="organiza-header">
        <v-col cols="12"
        sm="12"
        >
            <div>                
              <v-img src="../assets/sacolaCompras.png" height="30" contain></v-img>
            </div>
              <div class="titulo_sacola">
                <span class="titulo_desejo">Sacola de Compras</span>
                <span class="titulo_desejo" font-size="2px">4 items adicionado(s) a sacola</span>
              </div>
        </v-col>
      </v-row>
      <v-divider :thickness="5" color="black" class="border-opacity-100"> </v-divider>

      <v-col>
        <v-col cols="12"
        sm="8">
          <v-img src="../assets/sacolaCompras.png" height="30" contain></v-img>

        </v-col>

        <v-divider :thickness="5" color="black" class="border-opacity-100" vertical ></v-divider>

        <v-col cols="12"
        sm="4">
        <v-img src="../assets/sacolaCompras.png" height="30" contain></v-img>

      </v-col>

      </v-col>


    </v-conteiner>
        
  </main-layout>

  
</template>
  
<script>

  
  import MainLayout from "@/components/main-layout";

  export default {
    name: "home-view",
    components: {
      MainLayout

      
  
    },
    data: () => ({
      produtos:[
        {
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
  favorite: true
        },
        {
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        },{
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        },
        {
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        },
        {
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        },
        {
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        },
        {
          nome: "Calça",
          valorAtual: "100,23",
          imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          favorite: true
        }
      ]
  
  
    })
  }
</script>
  
<style lang="scss">

  .titulo_sacola{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    
  }

  .organiza-header{
    display: flex;
    flex-direction: row;
    width: 100vw;
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
  
</style>