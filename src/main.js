import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);
Vue.loadScript("/js/jquery-3.5.1.min.js")
Vue.loadScript("/js/fontawsome.js")
Vue.loadScript("/js/navbar.js")

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
