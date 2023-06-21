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

      <v-col >

        <v-col cols="8"
        sm="8">
          <v-col cols="5"
          sm="6"> 
            <v-img src="../assets/camiseta.png" ></v-img>
          </v-col>

          <v-col cols="4"
          sm="4">
            <h1>Camiseta Preta</h1>
            <span>Condiçao: Usada </span>
            <span>Tamanho: M</span>
            <span>Qnt: 1</span>
          </v-col>

          <v-row cols="2" class="row-preco align-items-center">

            <v-row>
              <span class="font-weight-black ">Preço</span>
            </v-row>
            
            <v-row>
              <span class="font-weight-black"> R$ 80,00</span>
            </v-row>

          </v-row>

          
          
        </v-col>

        <v-divider :thickness="7" color="black" class="border-opacity-100" vertical></v-divider>

        <v-col cols="4" class=" d-flex flex-column align-center">
         
       
          <h1 class="mb-5"> Resumo da Compra</h1>
          
          <v-row class="mt-5 " cols="8">
            
            <div class="d-flex flex-column mt-5">
              <div class="d-flex mt-5">
                <span >Subtotal:</span>
                <span >R$ 69,00</span>
              </div>
              
              <div class="mt-2">
                <span >Desconto:</span>
                <span >R$ 69,00</span>
              </div>
              
              <div class="mt-2">
                <span >Frete: </span>
                <span >R$ 69,00</span>

              </div>

            
            
              <v-divider color="black" class="border-opacity-100 mt-5" w ></v-divider>
            
              <span class="mt-5">Valor Total: R$ 69,00</span>

            </div>
            
          </v-row>

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