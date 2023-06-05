<template>
  <v-app>
    <v-container
        fluid
        elevation="0"
        height="50"
        color="null"
    >
      <v-row class="d-flex justify-space-between">
        <v-col  class="text-left">
          <v-img
              @click="click()"
              height="60"
              position=" left center"
              contain
              alt="Vuetify Logo"


              src="../assets/logo.png"
              transition="scale-transition"
          />
        </v-col>
        <v-col>
          <v-text-field class="borda"
                        outlined



                        label="Busque aqui..."
                        color="primary"
                        rounded
                        dense
          ></v-text-field>

        </v-col>


        <v-col align="right">
          <v-btn elevation="0" color="white">

            <v-icon>mdi-shopping-outline</v-icon>
            <span class="text--accent-2 ">{{ contaitens }} Itens</span>
          </v-btn>
          <v-btn  elevation="0" color="white" class="ml-2 ba">
            <v-icon>mdi-star-outline</v-icon>
            <span class="text--darken-3 ">Favoritos</span>

          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-main>
      <header-componente></header-componente>
    </v-main>

  </v-app>
</template>

<script>

import HeaderComponente from "@/components/header-componente";
import {mdiShoppingOutline} from '@mdi/js';


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