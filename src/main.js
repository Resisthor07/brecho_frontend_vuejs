import Vue from 'vue'

import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';
import homeView from "@/components/home-view";
import loginCard from "@/components/loginCard.vue"



Vue.config.productionTip = false

new Vue({
  vuetify, SvgIcon,homeView,
  render: h => h(loginCard)
}).$mount('#app')



