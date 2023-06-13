import Vue from 'vue'

import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';

import VueMask from "v-mask";
import router from './router'
import app from './App'




Vue.config.productionTip = false

new Vue({
  vuetify,
  SvgIcon,
  router,
  render: h => h(app)
}).$mount('#app')
Vue.use(VueMask)



