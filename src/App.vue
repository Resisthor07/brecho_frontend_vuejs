<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import {useFavoritosStore} from "@/store/store";


export default {
  name: 'App',

  created() {
    useFavoritosStore().restoreState()
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


  a {
    font-weight: bold;
    text-decoration: none;
    color: black;

    &.router-link-exact-active {
      text-decoration: none;
      color: black;
    }
  }
}


nav {
  padding: 30px;

  a {
    font-weight: bold;
   text-decoration: none;
    color: black;

    &.router-link-exact-active {
      text-decoration: none;
      color: black;
    }

}}


</style>
