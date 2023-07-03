<template>
<v-container>

  <v-col cols="12" sm="12">
    <v-card>

  <v-row v-for="item in produto"
  :key="item.id"
  >

    <v-col cols="12" sm="2">
      <v-img
          max-width="1000"
      :src="item.fotosDoProduto"
      ></v-img>

    </v-col>

    <v-col cols="12" sm="4"
    class="align-center"
    >
      <v-row      >
        {{item.nome}}
      </v-row>
      <v-row      >
       Tam: {{item.tamanho}}
      </v-row>

    </v-col>

    <v-col cols="12" sm="2">

      {{formataValor(item.valorAtual)}}
    </v-col>

    <v-col cols="12" sm="2" class="d-flex justify-end">
      <v-icon
          @click="removerSacola(item.id)"
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
    produto: Array

  },

  data:()=>({



  })
}
</script>

<style scoped>

</style>