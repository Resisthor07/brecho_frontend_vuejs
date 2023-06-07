<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <banner-img></banner-img>
      <news-home></news-home>
      <scroll-home></scroll-home>
      <banner-img></banner-img>
      <scroll-home></scroll-home>
    </v-main>

  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import {mdiShoppingOutline} from '@mdi/js';

import ScrollHome from "@/components/ScrollHome";
import BannerImg from "@/components/banner-img";
import NewsHome from "@/components/news-home";


export default {
  name: 'App',

  components: {
    NewsHome,
    BannerImg,
    ScrollHome,

    HeaderComponente,

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
