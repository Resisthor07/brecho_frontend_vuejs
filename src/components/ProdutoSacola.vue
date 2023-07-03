<template>
<v-container>

  <v-col cols="12" sm="6">
  <v-row v-for="item in produto"
  :key="item.id"
  >
    <v-col cols="12" sm="2">
      <v-img
          max-width="150"
      :src="item.fotosDoProduto"
      ></v-img>

    </v-col>
    <v-col cols="12" sm="4">
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
  </v-row>

  </v-col>
  <v-divider></v-divider>

</v-container>
</template>

<script>
export default {
  name: "ProdutoSacola",

  methods:{
    formataValor(valor) {
      return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
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