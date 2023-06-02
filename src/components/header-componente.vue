<template>
  <section class="container ">
    <div class="level">
      <div class="columns  is-vcentered is-centered">
        <div class="column is-3 level-left has-text-left">
          <b-image
              class="is-size-1"
              alt="Vue logo"
              :src="require('@/assets/logo.png')"></b-image>
        </div>
      </div>
      <div class="column is-6 ">
        <b-field>
          <b-input placeholder="Busque aqui..." rounded></b-input>
        </b-field>
      </div>
      <div class="column is-3">
        <svg-icon class="mr-4" type="mdi" :path="mdiShoppingOutline"></svg-icon>
        <svg-icon cla type="mdi" :path="mdiStarOutline"></svg-icon>
      </div>



    </div>
    <div class="notification is-primary">
      teste
    </div>
  </section>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiShoppingOutline} from '@mdi/js';
import {mdiStarOutline} from '@mdi/js';

export default {
  name: "header-componente",
  components: {
    SvgIcon
  },
  data() {
    return {
      mdiShoppingOutline, mdiStarOutline

    }
  }
}


</script>

<style scoped>


</style>