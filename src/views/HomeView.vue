<template>
  <main-layout>
    <banner-img></banner-img>
    <scroll-home :produtos="produtos" titulo="Novidades"></scroll-home>
    <banner-img></banner-img>
    <news-home></news-home>
    <scroll-home></scroll-home>
  </main-layout>

</template>


<script>
// @ is an alias to /src
import NewsHome from "@/components/news-home";

import BannerImg from "@/components/banner-img";
import ScrollHome from "@/components/ScrollHome";
import MainLayout from "@/components/main-layout";

export default {
  name: 'HomeView',
  components: {
    MainLayout,
    NewsHome,
    BannerImg,
    ScrollHome,
  },
  data: () => ({
    produtos: [
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
      }, {
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
