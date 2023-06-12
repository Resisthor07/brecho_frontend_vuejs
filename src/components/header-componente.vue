<template>
  <v-app>
    <v-container
        fluid
        elevation="0"
        height="50"
        color="null"
    >
      <v-row class="d-flex justify-space-between">
        <v-col class="text-left">
          <v-img
              @click="click()"
              height="60"
              position=" left center"
              contain

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
          <v-btn elevation="0" color="white" class="ml-2 ba">
            <v-icon>mdi-star-outline</v-icon>
            <span class="text--darken-3 ">Favoritos</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
=========
  <v-container fluid elevation="0" height="50">
    <v-row class="d-flex justify-space-between mr-14 ml-14">
      <v-col>
        <v-img
            @click="click()"
            height="60"
            position=" left center"
            contain
            alt="Brechó Logo"
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
                      hide-details="true"
        ></v-text-field>
      </v-col>
      <v-col align="right">
        <v-btn elevation="0" color="white">
          <v-icon>mdi-shopping-outline</v-icon>
          <span class="text--accent-2 ">{{ contaitens }} Itens</span>
        </v-btn>
        <v-btn elevation="0" color="white" class="ml-2 ba">
          <v-icon>mdi-star-outline</v-icon>
          <span class="text--darken-3 ">Favoritos</span>
        </v-btn>
      </v-col>
    </v-row>



    <v-row
        class="d-flex justify-space-around backgroundMenu">
      <v-btn
          elevation="0"
          v-for="item in menus"
          :key="item.nome"
          width="20%"  height="45" color="primary t">
        {{ item.nome }}
      </v-btn>
    </v-row>

  </v-container>
>>>>>>>>> Temporary merge branch 2
</template>

<script>
import {mdiShoppingOutline} from '@mdi/js';
export default {
  name: 'App',
  components: {},
  methods: {
    click: function () {
      console.log("teste")
    }
  },

  data: () => ({
    mdiShoppingOutline,
    contaitens: 12,
    menus: [{
      nome: "calças"
    },
      {
        nome: "Blusas"
      },
      {
        nome: "Camisas"
      },
      {
        nome: "Blazers"
      },
      {nome: "Acessórios"}

    ]
  }),
};
</script>
<style>
.borda {
  border-color: #FF7272;
}
.backgroundMenu{
  background-color: #FF7272;
}
</style>