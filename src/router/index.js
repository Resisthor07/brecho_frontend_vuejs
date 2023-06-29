import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaDeDesejosView from "@/views/ListaDeDesejosView";
import ProductDetail from "@/views/product-detailView"
import resultadobuscaView from "@/views/resultadobusca-view";


import loginView from "@/views/login-View"

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
        component: ListaDeDesejosView
    },
    {
        path: '/detalhes',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/resultados',
        name: 'resultados',
        component: resultadobuscaView
    },
    
    {
        path: '/login',
        name: 'login',
        component: loginView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
