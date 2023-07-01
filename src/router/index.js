import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ListaDeDesejosView from "@/views/ListaDeDesejosView";
import ProductDetail from "@/views/product-detailView"
import resultadobuscaView from "@/views/resultadobusca-view";
import sacolaCompras from "@/views/sacolaCompras-View";

import loginView from "@/views/login-View"

import HomeView from "@/views/HomeView";

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
        path: '/resultados/:tipo',
        name: 'resultados',
        component: resultadobuscaView
    },

    {
        path: '/login',
        name: 'login',
        component: loginView
    },
    {
        path: '/sacola',
        name: 'sacola',
        component: sacolaCompras

    },
    //Samir
    {
        path: '/administrador',
        name: 'administrador',
        component: () => import('@/views/PaginaAdm.vue'),
        children: [
            {
                path: '/administrador-produtos',
                name: 'produtos',
                component: () => import('@/components/AdmProdutos.vue')
            },
            {
                path: '/administrador-pedidos',
                name: 'pedidos',
                component: () => import('@/components/AdmPedidos.vue')
            },
            {
                path: '/administrador-cadastro-produtos',
                name: 'cadastro-produtos',
                component: () => import('@/components/AdmCadastroProdutos.vue')
            },
            {
                path: '/administrador-configuracoes',
                name: 'configuracoes',
                component: () => import('@/components/AdmConfiguracoes.vue')
            }
        ]
    }
    //samir
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
