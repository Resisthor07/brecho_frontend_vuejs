<template>
<v-app>
    <v-main>
    <header-componente></header-componente>
    <main>
<slot></slot>
    </main>
    </v-main>

    <footer-componente></footer-componente>

</v-app>
</template>

<script>
import FooterComponente from "@/components/footer-componente";
import headerComponente from "@/components/header-componente";
export default {
  name: "main-layout",
  components: {FooterComponente, headerComponente},
  data()  {
    return{
      rules: [v=> v.length <=5 || 'Limite máximo de caracteres atingido']
    }
  }
}
</script>

<style scoped>

</style>