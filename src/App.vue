<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <product-card></product-card>
      <LoginCard></LoginCard>
      //<footer-componente></footer-componente>
    </v-main>

  </v-app>
</template>

<script>


//import {mdiShoppingOutline} from '@mdi/js';
import LoginCard from "./components/loginCard.vue";
//import footerComponente from "@/components/footer-componente.vue";

import { mdiShoppingOutline } from '@mdi/js';

//import FooterComponente from "@/components/footer-componente.vue"


export default {
  name: 'App',
  components: {
    LoginCard,
    


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
