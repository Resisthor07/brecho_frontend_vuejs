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
      <tabela-dados></tabela-dados>
      <footer-componente></footer-componente>
    </v-main>

  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import {mdiShoppingOutline} from '@mdi/js';

import ScrollHome from "@/components/ScrollHome";
import BannerImg from "@/components/banner-img";
import NewsHome from "@/components/news-home";

import FooterComponente from "@/components/footer-componente.vue"
import TabelaDados from "@/components/tabela-dados";


export default {
  name: 'App',

  components: {
    TabelaDados,
    NewsHome,
    BannerImg,
    ScrollHome,

    HeaderComponente,
    FooterComponente
  },

  methods:{

    click : function (){
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
.borda{
  border-color: #FF7272;
}
</style>
