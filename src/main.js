import Vue from 'vue'

import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';
//import homeView from "@/components/home-view";
//import cadastroCliente from "@/components/cadastroCliente";
//import VueMask from "v-mask";
import LoginCard from "@/components/loginCard.vue"


Vue.config.productionTip = false

new Vue({
  vuetify, SvgIcon,LoginCard,
  render: h => h(LoginCard)
}).$mount('#app')
//Vue.use(VueMask)



