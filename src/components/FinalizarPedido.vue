<template>
<v-card>
  <v-card-title>Compra realizada com sucesso.</v-card-title>

  <v-img
      max-width="500"
  src="./src/assets"
  ></v-img>
  <router-link to="/">
  <v-btn
  x-large
  color="primary"
  >Vamos dar mais uma olhadinha nos produtos?</v-btn>
  </router-link>
</v-card>
</template>

<script>
export default {
  name: "FinalizarPedido"
}
</script>

<style scoped>

</style>