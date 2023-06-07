<template>
  <v-app>
    <v-main>
      <LoginCard></LoginCard>
    </v-main>

  </v-app>
</template>

<script>


//import {mdiShoppingOutline} from '@mdi/js';
import LoginCard from "./components/loginCard.vue";
import { mdiShoppingOutline } from '@mdi/js';


export default {
  name: 'App',
  components: {
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
