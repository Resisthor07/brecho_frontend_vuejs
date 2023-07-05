<template>
  <div>
    <v-container fluid elevation="0" height="50">
      <v-row class="d-flex  justify-space-between mr-14 ml-14">
        <v-col>
          <router-link to="/">
          <v-img
              @click="click()"
              height="60"
              position=" left center"
              contain
              alt="Brechó Logo"
              src="../assets/logo.png"
              transition="scale-transition"
          />
          </router-link>
        </v-col>
<!--        <v-col>-->
<!--          <v-text-field class="borda"-->
<!--                        outlined-->
<!--                        label="Busque aqui..."-->
<!--                        color="primary"-->
<!--                        rounded-->
<!--                        dense-->
<!--                        hide-details="true"-->
<!--          ></v-text-field>-->
<!--        </v-col>-->
        <v-col align="right">
          <router-link to="sacola">
            <v-btn elevation="0" color="white">
              <v-icon>mdi-shopping-outline</v-icon>
              <span v-if="this.checaMudanca <= 1" class="text--accent-2 ">{{ checaMudanca -1 }} Item</span>
              <span v-if="this.checaMudanca > 1" class="text--accent-2 ">{{ checaMudanca -1 }} Itens</span>
            </v-btn>
          </router-link>
          <router-link to="/lista-de-desejos">
            <v-btn elevation="0" color="white" class="mr-4 ">
              <v-icon>mdi-star-outline</v-icon>
              <span class="text--darken-3 "
              >Favoritos</span>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>

      <v-row
          class="d-flex justify-space-around backgroundMenu">
        <router-link
            v-for="item in menus"
            value="item.nome"
            :key="item.nome"
            :to="{name: 'resultados', params:{ tipo: item.nome}}">
        <v-btn
            elevation="0"
            class="text--white"
            width="20%" height="45" color="primary" >
          {{ item.nome }}
        </v-btn>
        </router-link>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import {mdiShoppingOutline} from '@mdi/js';

import {useSacolaStore} from "@/store/sacolaStore";

export default {
  name: 'App',
  components: {},

  data: () => ({
    mdiShoppingOutline,
    contaitens: 0,
    menus: [{
      nome: "calças"
    },
      {
        nome: "Blusa"
      },
      {
        nome: "Camisas"
      },
      {
        nome: "Blazer"
      },
      {nome: "Acessórios"}
    ]
  }),

  computed: {
    checaMudanca() {
      return useSacolaStore().listaSacola.length
    }
  },

  watch: {
    ListaDeProdutos() {
      this.contaitens = useSacolaStore().listaSacola.length
    }
  },
  methods: {
    click: function () {
      console.log("teste")
    },





  },
};
</script>
<style>
.borda {
  border-color: #FF7272;
}

.backgroundMenu {
  background-color: #FF7272;
}
</style>