<template>
  <div>
    <v-container fluid elevation="0" height="50">
      <v-row class="d-flex justify-space-between mr-14 ml-14">
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
          <router-link to="/detalhes">
            <v-btn elevation="0" color="white">
              <v-icon>mdi-shopping-outline</v-icon>
              <span class="text--accent-2 ">{{ contaitens }} Itens</span>
            </v-btn>
          </router-link>
          <router-link to="/lista-de-desejos">
            <v-btn elevation="0" color="white" class="ml-2 ba">
              <v-icon>mdi-star-outline</v-icon>
              <span class="text--darken-3 "
              >Favoritos</span>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <router-link to="/resultados">
      <v-row
          class="d-flex justify-space-around backgroundMenu">
        <v-btn
            elevation="0"
            v-for="item in menus"
            :key="item.nome"
            width="20%" height="45" color="primary t">
          {{ item.nome }}
        </v-btn>
      </v-row>
      </router-link>
    </v-container>
  </div>
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

.backgroundMenu {
  background-color: #FF7272;
}
</style>