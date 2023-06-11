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

  .poppins-bold{
    font-family: 'Poppins Bold';
  }
  .poppins-light{
    font-family: 'Poppins Light';
  }
  .poppins-medium{
    font-family: 'Poppins Medium';
  }
  .poppins-regular{
    font-family: 'Poppins Regular';
  }
  .poppins-semibold{
    font-family: 'Poppins SemiBold';
  }

  .f12{font-size: 0.75rem;}
  .f13{font-size: 0.813rem;}
  .f14{font-size: 0.875rem;}
  .f15{font-size: 0.938rem;}
  .f16{font-size: 1rem;}
  .f17{font-size: 1.063rem;}
  .f18{font-size: 1.125rem;}
  .f19{font-size: 1.188rem;}
  .f20{font-size: 1.25rem;}
  .f21{font-size: 1.313rem;}
  .f22{font-size: 1.375rem;}
  .f23{font-size: 1.438rem;}
  .f24{font-size: 1.5rem;}
  .f25{font-size: 1.563rem;}
  .f26{font-size: 1.625rem;}
  .f27{font-size: 1.688rem;}
  .f28{font-size: 1.75rem;}
  .f29{font-size: 1.813rem;}
  .f30{font-size: 1.875rem;}
  .f31{font-size: 1.938rem;}
  .f32{font-size: 2rem;}
  .f33{font-size: 2.063rem;}
  .f34{font-size: 2.125rem;}
  .f35{font-size: 2.188rem;}
  .f36{font-size: 2.25rem;}
  .f37{font-size: 2.313rem;}
  .f38{font-size: 2.375rem;}
  .f38{font-size: 2.438rem;}
  .f40{font-size: 2.5rem;}

  .borda {
    border-color: #FF7272;
  }
</style>
