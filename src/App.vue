<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <product-card></product-card>
      <login-card></login-card>
    </v-main>

  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import {mdiShoppingOutline} from '@mdi/js';
import ProductCard from "@/components/productCard";
import LoginCard from "./components/loginCard.vue";


export default {
  name: 'App',

  components: {
    ProductCard,
    HeaderComponente,
    LoginCard
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
