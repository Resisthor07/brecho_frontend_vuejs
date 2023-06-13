<template>
  <v-app>
    <header-componente></header-componente>
    <main>

    </main>
    <footer-componente></footer-componente>
  </v-app>
</template>

<script>
import FooterComponente from "@/components/footer-componente";
export default {
  name: "base-formulario",
  components: {FooterComponente},
  data()  {
    return{
      rules: [v=> v.length <=5 || 'Limite máximo de caracteres atingido']
    }
  }
}
</script>

<style scoped>

</style>