<template>
<main-layout>


  <v-card
      elevation="0"
      class="d-flex align-center my-16 flex-column">
    <v-card-title
    class=""
    >Agradecemos sua preferência</v-card-title>
    <v-img
        max-width="200"
    src="@/assets/logo.png"
    ></v-img>
    <router-link to="/">
    <v-btn
        max-width="250"
    color="success"
    >Dê mais uma olhadinha.</v-btn>
    </router-link>
  </v-card>


</main-layout>
</template>

<script>
import MainLayout from "@/components/main-layout";

export default {
  name: "PedidoGravado",
  components: { MainLayout}
}
</script>

<style scoped>

</style>