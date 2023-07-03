<template>
  <v-container fluid elevation="0">

    <v-card

        class="ma-0  "
        width="280"
        min-height="580"
        elevation="0"
        outlined
        rounded
    >

      <v-card-text class="containeIimg d-flex justify-end ">
        <v-icon class="favoriteIcon "
                :color="corIcone"
                size="30"
                @click="mudaCorIcone(produto)"
        >{{ iconeFavorito }}
        </v-icon>
      </v-card-text>
     
      
      <router-link :to="{name: 'ProductDetail', query: {id: produto.id}}">
      <div>
        <img
            width="250"

            class="pa-5 mt-4"
            :src="produto.fotosDoProduto"
        />
      </div>
      
      <v-card-title
      >{{ produto.nome }}</v-card-title>
      <v-card-title>{{ formataValor(produto.valorAtual)}}</v-card-title>

      

      </router-link>

    </v-card>

  </v-container>
</template>
<script>
import {useFavoritosStore} from "@/store/store";

export default {
  name: "productCard",
  methods: {
    mudaCorIcone: function () {
      this.favorite = !this.favorite
      if(this.favorite === true){
        useFavoritosStore().adionarFavoritos(this.produto.id)
      }
      else{
        useFavoritosStore().removerFavoritos(this.produto.id)
      }
    },

    formataValor(valor) {
      return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }

  },
  props: {
    produto: Object
  },
  mounted() {
    this.favorite = useFavoritosStore().isFavorite(this.produto.id)

  },
  data: () => ({
    favorite: false,
    preco: 0,
    favorito:[]
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
  },


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

.bordaCard {
  border-inline: 5px;
}
</style>