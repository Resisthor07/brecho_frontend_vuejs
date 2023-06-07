<template>
  <v-slide-group
      class="pa-0"
      active-class="success"
      show-arrows
  >
    <v-slide-item
        v-for="n in 10"
        :key="n"
    >
      <product-card></product-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>

import ProductCard from "@/components/productCard";

export default {
  name: "ScrollHome",
  components: {ProductCard},
  methods: {},

  data: () => ({
    interador: 50,


  })
}
</script>

<style scoped>

</style>