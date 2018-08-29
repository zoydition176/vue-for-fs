// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import '../static/public.css'
import '../static/fs_allCss.css'
import '../static/index.css'
import '../static/top_bottom.css'
import '../static/media.css'
import '../static/backstage.css'
window.$ = $
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
