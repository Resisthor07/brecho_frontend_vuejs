import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ListaDeDesejosView from "@/views/ListaDeDesejosView";
import ProductDetail from "@/views/product-detailView.vue";
import Pagamento from "@/views/pagamentoView.vue"
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
        path: '/pagamento/:id',
        name: 'checkoutpagamento',
        component: Pagamento
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
    {

        path: '/cliente-cadastro',
        name: 'cliente-cadastro',
        component: () => import('@/views/CadastroClienteView')
    },
    //Samir
    {
        path: '/administrador',
        name: 'administrador',
        component: () => import('@/views/PaginaAdm.vue')
    }
    //samir
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
