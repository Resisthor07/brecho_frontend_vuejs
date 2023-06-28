<template>
  <main-layout>
    <banner-img></banner-img>
    <scroll-home :produtos="produtos" titulo="Novidades"></scroll-home>
    <banner-generico></banner-generico>
    <news-home></news-home>
    <scroll-home

        :produtos="promocao" titulo="Ofertas"></scroll-home>
  </main-layout>

</template>


<script>
// @ is an alias to /src
import NewsHome from "@/components/news-home";

import BannerImg from "@/components/banner-img";
import ScrollHome from "@/components/ScrollHome";
import MainLayout from "@/components/main-layout";
import ProdutoClient from "@/clients/produto-client";
import BannerGenerico from "@/components/BannerGenerico";

export default {
  name: 'HomeView',
  components: {
    BannerGenerico,
    MainLayout,
    NewsHome,
    BannerImg,
    ScrollHome,
  },
  created(){
    this.findAllProducts()
  },
  data: () => ({
    produtos: [],
promocao:[]
  }),

  methods:{

    async findAllProducts(){
      const getApi = new ProdutoClient();
      this.produtos = await getApi.listarProdutos()

      //console.log(this.produtos)
      this.promocao = this.produtos.filter((produto) => produto.emPromocao === true)
      this.produtos = this.produtos.filter((produto) => produto.emPromocao === false)
    }

  }

}
</script>
