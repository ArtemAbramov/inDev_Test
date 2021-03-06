import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store'
import bootstrap from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.use(bootstrap)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
