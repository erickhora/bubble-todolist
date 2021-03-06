import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import '@babel/polyfill'
import VueParticles from 'vue-particles'
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
Vue.use(VueParticles)
Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
