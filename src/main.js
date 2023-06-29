import Vue from 'vue'
import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';
import { createPinia, PiniaVuePlugin } from 'pinia'
import { VueMaskDirective } from "v-mask";




import router from './router'
import app from './App'

import 'vuetify/dist/vuetify.css';
import fontes from '@/assets/styles.css'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false
Vue.directive("mask", VueMaskDirective);

new Vue({
  vuetify, SvgIcon,fontes,router,pinia,


  render: h => h(app)

}).$mount('#app')




