<template>
  <div id="app">
   <header-componente></header-componente>
  </div>
</template>

<script>

import HeaderComponente from "@/components/header-componente";

export default {
  name: 'App',
  components: {
    HeaderComponente,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
