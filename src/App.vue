<template>
  <v-app>
    <v-main>
      <header-componente></header-componente>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
export default {
  name: 'App',
  components: {
    HeaderComponente,
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

