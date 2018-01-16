// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import io from 'socket.io-client'
import store from './store'
import './plugins'
// import Home from './Home.vue'
// const app = new Vue({ 
//    render: h => h(Home), 
// }).$mount('#app');


require('../node_modules/bootstrap/less/bootstrap.less')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})