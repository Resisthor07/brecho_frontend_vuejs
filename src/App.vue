<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <product-card></product-card>
    </v-main>

  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import {mdiShoppingOutline} from '@mdi/js';
import ProductCard from "@/components/productCard";


export default {
  name: 'App',

  components: {
    ProductCard,
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
