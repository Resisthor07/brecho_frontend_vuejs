import Vue from 'vue'

import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';
//import homeView from "@/components/home-view";
//import cadastroCliente from "@/components/cadastroCliente";
//import VueMask from "v-mask";
import LoginCard from "@/components/loginCard.vue"
import sacolaCompras from "@/components/sacolaComprasCard.vue"
import listaDesejo from "@/components/listadedesejos-view.vue"


Vue.config.productionTip = false

new Vue({
  vuetify, SvgIcon,LoginCard,sacolaCompras,listaDesejo,
  render: h => h(sacolaCompras)
}).$mount('#app')
//Vue.use(VueMask)



