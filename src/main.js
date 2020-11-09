import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoadScript from 'vue-plugin-load-script';
import router from './router/index.js'
 
Vue.use(VueRouter)
Vue.use(LoadScript);
Vue.loadScript("/js/jquery-3.5.1.min.js")
Vue.loadScript("/js/fontawsome.js")
Vue.loadScript("/js/navbar.js")

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
