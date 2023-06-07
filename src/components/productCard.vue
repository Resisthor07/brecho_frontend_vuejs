<template>
  <v-container fluid class="pl-10 pr-10">
    <v-card
        clas
        :loading="loading"
        class="mx-10 my-10"
        max-width="280"
    >
      <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
      </template>

      <div class="containeIimg">
        <v-icon class="favoriteIcon"
                :color="corIcone"
                size="30"
                @click="mudaCorIcone()"
        >{{iconeFavorito}}
        </v-icon>
        <img
            width="100%"
            class="pa-5 mt-4"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        />
      </div>

      <v-card-title>{{ nome }}</v-card-title>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
        </v-row>

      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>R$ {{ valorAtual }}</v-card-title>


    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "productCard",
  methods:{
    mudaCorIcone: function (){
      this.favorite = ! this.favorite
    }},


  data: () => ({
    nome: "Calça",
    valorAtual: " 129.60",
    favorite: false
  }),
computed: {
    corIcone: function (){
      if(this.favorite === true){
        return 'yellow darken-3'
      }
      return "black"
    },
    iconeFavorito: function (){
      if(this.favorite=== true){
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

</style>