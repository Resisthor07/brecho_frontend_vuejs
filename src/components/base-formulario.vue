<template>
  <v-container>



  </v-container>

</template>

<script>
export default {
  name: "base-formulario",

  data()  {
    return{
      rules: [v=> v.length <=5 || 'Limite máximo de caracteres atingido']
    }
  }
}
</script>

<style scoped>

</style>