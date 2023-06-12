import Vue from 'vue'

import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';
import homeView from "@/components/home-view";



Vue.config.productionTip = false

new Vue({
  vuetify, SvgIcon,
  render: h => h(homeView)
}).$mount('#app')



