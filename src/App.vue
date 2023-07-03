<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import {useFavoritosStore} from "@/store/store";
//import {DongleRegular} from "@/assets/fonts/Dongle/DongleRegular.ttf";


export default {
  name: 'App',

  created() {
    useFavoritosStore().restoreState()
  }
}

</script>

<style lang="scss">
#app {
  font-family: DongleRegular, Helvetica, Arial, sans-serif;
  font-size: x-large;
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
