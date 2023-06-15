import Vue from 'vue'
import vuetify from './plugins/vuetify'
import SvgIcon from '@jamescoyle/vue-icon';
import LoginCard from '@/views/login-View.vue'
import VueMask from "v-mask";
import router from './router'
import app from './App'
import sacolaCompras from '@/views/sacolaCompras-View.vue'
import listaDesejo from '@/views/listadedesejosView.vue'




Vue.config.productionTip = false

new Vue({
  vuetify, SvgIcon,LoginCard,sacolaCompras,listaDesejo,app,
  //render: h => h(sacolaCompras),
  //vuetify,
  //SvgIcon,
  router,
  render: h => h(sacolaCompras)
}).$mount('#app')
Vue.use(VueMask)



