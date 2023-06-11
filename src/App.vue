<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <product-card></product-card>

      <banner-img></banner-img>
      <news-home></news-home>
      <scroll-home></scroll-home>
      <banner-img></banner-img>
      <scroll-home></scroll-home>
      <footer-componente></footer-componente>
    </v-main>

  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import { mdiShoppingOutline } from '@mdi/js';

import ScrollHome from "@/components/ScrollHome";
import BannerImg from "@/components/banner-img";
import NewsHome from "@/components/news-home";

import FooterComponente from "@/components/footer-componente.vue"


export default {
  name: 'App',

  components: {
    NewsHome,
    BannerImg,
    ScrollHome,

    HeaderComponente,
    FooterComponente
  },

  methods: {

    click: function () {
      console.log("teste")
    }
  },




  data: () => ({
    mdiShoppingOutline,
    contaitens: 0,


  }),
};
</script>
<style>
  @font-face {
    font-family: 'Poppins Bold';
    src: url(./fonts/Poppins-Bold.ttf) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins Light';
    src: url(./fonts/Poppins-Light.ttf) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins Medium';
    src: url(./fonts/Poppins-Medium.ttf) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins Regular';
    src: url(./fonts/Poppins-Regular.ttf) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins SemiBold';
    src: url(./fonts/Poppins-SemiBold.ttf) format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  
  .borda {
    border-color: #FF7272;
  }
</style>
