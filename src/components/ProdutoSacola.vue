<template>
<v-container>

  <v-col cols="12" sm="12" >

    <v-card>

  <v-row
         class="align-content-center"
  >

    <v-col cols="12" sm="2 ">
      <router-link :to="{name: 'ProductDetail', query: {id: produto.id}}">
      <v-img
          class="ma-3"
          max-width="75"
      :src="produto.fotosDoProduto"
      ></v-img>
      </router-link>
    </v-col>

    <v-col cols="12" sm="4"
    class="mt-8 align-center flex-column justify-space-between"
    >
      <v-row

      >
        {{produto.nome}}
      </v-row>
      <v-row      >
       Tam: {{produto.tamanho}}
      </v-row>

    </v-col>

    <v-col cols="12" sm="2"
           class="mt-8 align-center flex-column justify-space-between"
    >

      {{formataValor(produto.valorAtual)}}
    </v-col>

    <v-col cols="12" sm="2" class="d-flex justify-end">
      <v-icon
          @click="removerSacola(produto.id)"
          color="red" large>mdi-delete-outline</v-icon>
    </v-col>

  </v-row>

      <v-divider></v-divider>
    </v-card>

  </v-col>
  <v-divider></v-divider>

</v-container>
</template>

<script>
import {useSacolaStore} from "@/store/sacolaStore";

export default {
  name: "ProdutoSacola",

  methods:{
    formataValor(valor) {
      return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    },

    removerSacola(id) {
      useSacolaStore().removerSacola(id)
      console.log(id+'removeu')
    }

  },

  props:{
    produto: Object

  },

  data:()=>({



  })
}
</script>

<style scoped>

</style>