<template>
  <div>
  <news-home :titulo="titulo"></news-home>
  <v-slide-group
      class="pa-0"
      active-class="success"
      show-arrows
  >
    <v-slide-item
        v-for="n in produtos"
        :key="n"
    >
      <product-card :produto="n"></product-card>
    </v-slide-item>
  </v-slide-group>
  </div>
</template>

<script>

import ProductCard from "@/components/productCard";
import NewsHome from "@/components/news-home";

export default {
  name: "ScrollHome",
  components: {NewsHome, ProductCard},
  methods: {},
  props:{
    titulo: String,
    produtos: Object
  },


}
</script>

<style scoped>

</style>