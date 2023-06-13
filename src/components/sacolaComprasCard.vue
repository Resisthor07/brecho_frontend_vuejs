<template>
    <v-app>
        <HeaderComponente></HeaderComponente>
      <v-main>
        <v-row>
            <v-conteiner>
                <v-col class="titulo_sacola">
                        <v-img src="../assets/sacolaCompras.png" height="30" contain></v-img>
                        <span class="titulo_desejo">Sacola de Compras</span>
                </v-col>

            </v-conteiner>
        </v-row>
        
  
      </v-main>
      <footer-componente></footer-componente>
  
    </v-app>
  
  </template>
  
  <script>
  import HeaderComponente from "@/components/header-componente";
  
  import FooterComponente from "@/components/footer-componente";
  
  
  export default {
    name: "home-view",
    components: {

      FooterComponente,
  
      HeaderComponente,
  
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
  
  <style scoped>

  .titulo_sacola{
    width: 30vw;
    flex-direction: row;
    
    
  }
  
  </style>