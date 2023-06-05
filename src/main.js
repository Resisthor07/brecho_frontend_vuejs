import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';



Vue.config.productionTip = false

new Vue({
  vuetify, SvgIcon,
  render: h => h(App)
}).$mount('#app')



