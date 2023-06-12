<template>
  <v-container fluid elevation="0">
    <v-card
        :loading="loading"
        class="ma-0  "
        max-width="280"
        elevation="0"
        outlined
    >
      <div class="containeIimg">
        <v-icon class="favoriteIcon"
                :color="corIcone"
                size="30"
                @click="mudaCorIcone()"
        >{{ iconeFavorito }}
        </v-icon>
        <img
            width="100%"
            class="pa-5 mt-4"
            :src="produto.imagem"
        />
      </div>
      <v-card-title
      >{{ produto.nome }}</v-card-title>
      <v-card-title>R$ {{ produto.valorAtual }}</v-card-title>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "productCard",
  methods: {
    mudaCorIcone: function () {
      this.favorite = !this.favorite
    }
  },
  props: {
    produto: Object
  },
  mounted(){
    this.favorite = this.produto.favorite
  },
  data:() =>({
    favorite: false
  }),
  computed: {
    corIcone: function () {
      if (this.favorite === true) {
        return 'yellow darken-3'
      }
      return "black"
    },
    iconeFavorito: function () {
      if (this.favorite === true) {
        return "mdi-star"
      }
      return "mdi-star-outline"
    }
  }


};
</script>
<style scoped>
.containeIimg {
  position: relative;
}

.favoriteIcon {

  position: absolute;
  right: 3%;
  top: 3%;
}
.bordaCard{
  border-inline: 5px;
}
</style>