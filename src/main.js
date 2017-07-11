import Vue from 'vue'
import app from './app.vue'
import router from './router'
//import VueResource from 'vue-resource'


//Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
});
