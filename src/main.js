// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import $ from 'jquery'
import App from './App'
// 在这里没use的原因是因为在对应文件夹下的index.JS文件下use过一次了。。然后引了index.js  所以不用再use  我还看了半天。。
import router from './router'
import Banner from '@/components/global/banner'
// import '../static/public.css'
// import '../static/fs_allCss.css'
// import '../static/index.css'
// import '../static/top_bottom.css'
// import '../static/media.css'
// import '../static/backstage.css'
// window.$ = $
Vue.use(Banner)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
