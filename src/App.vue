<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
      <footer-componente></footer-componente>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import FooterComponente from "@/components/footer-componente.vue";
export default {
  name: 'App',
  components: {
    HeaderComponente,
    FooterComponente,
  },
  methods:{
    click : function (){
      console.log("teste")
    }
  },




  data: () => ({




  }),
};
</script>

