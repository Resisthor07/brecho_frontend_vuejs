<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <product-card></product-card>
      <LoginCard></LoginCard>
      <footer-componente></footer-componente>
    </v-main>

  </v-app>
</template>

<script>

<<<<<<< HEAD

//import {mdiShoppingOutline} from '@mdi/js';
import LoginCard from "./components/loginCard.vue";
//import footerComponente from "@/components/footer-componente.vue";

import { mdiShoppingOutline } from '@mdi/js';

//import FooterComponente from "@/components/footer-componente.vue"
=======
import HeaderComponente from "@/components/header-componente";
import { mdiShoppingOutline } from '@mdi/js';

import ScrollHome from "@/components/ScrollHome";
import BannerImg from "@/components/banner-img";
import NewsHome from "@/components/news-home";
>>>>>>> b35cead94150328fb1e473808f0ff82d1a52d2ee

import FooterComponente from "@/components/footer-componente.vue";
import ProductsDetail from "@/components/products-detail.vue";

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    LoginCard,
    


=======
    NewsHome,
    BannerImg,
    ScrollHome,
    ProductsDetail,

    HeaderComponente,
    FooterComponente
>>>>>>> b35cead94150328fb1e473808f0ff82d1a52d2ee
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
    font-family: 'Dongle Bold';
    src: url(./fonts/Dongle-Bold.woff) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Dongle Light';
    src: url(./fonts/Dongle-Light.woff) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Dongle Regular';
    src: url(./fonts/Dongle-Regular.woff) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .dongle-bold{
    font-family: 'Dongle Bold';
  }
  .dongle-light{
    font-family: 'Dongle Light';
  }
  .dongle-regular{
    font-family: 'Dongle Regular';
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

  .bg-ff7{
    background-color: #FF7272;
  }
  
  .c313{
    color: #313131;
  }
  .cfff{
    color: #ffff;
  }

  .borda-padrao{
    border: 1px solid #0000;
  }

  .borda {
    border-color: #FF7272;
  }
</style>
