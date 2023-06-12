<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <banner-img></banner-img>


      <scroll-home :produtos="produtos" titulo="Novidades"></scroll-home>
      <banner-img></banner-img>
      <scroll-home></scroll-home>
      <tabela-dados></tabela-dados>
      <base-formulario></base-formulario>

    </v-main>
    <footer-componente></footer-componente>

  </v-app>

</template>

<script>
import HeaderComponente from "@/components/header-componente";
import ScrollHome from "@/components/ScrollHome";
import BannerImg from "@/components/banner-img";
import FooterComponente from "@/components/footer-componente";
import BaseFormulario from "@/components/base-formulario";


export default {
  name: "home-view",
  components: {
    BaseFormulario,

    FooterComponente,

    BannerImg,
    ScrollHome,
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

</style>