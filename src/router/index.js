import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import listadedesejosView from "@/views/ListaDeDesejosView";
import productsDetail from "@/components/products-detail";
import resultadobuscaView from "@/views/resultadobusca-view";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/lista-de-desejos',
        name: 'listaDesejos',
        component: listadedesejosView
    },
    {
        path: '/detalhes',
        name: 'detalhes',
        component: productsDetail
    },
    {
        path: '/resultados',
        name: 'resultados',
        component: resultadobuscaView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
