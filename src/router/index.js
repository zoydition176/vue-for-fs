import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import passwordforgotten from '@/components/passwordforgortten/passwordforgotten'
Vue.use(Router)

export default new Router({
  routes: [
    // 重定向到login
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/passwordforgotten',
      name: 'passwordforgotten',
      component: passwordforgotten
    }
  ],
  mode: 'history'// 去除开头的#号
})
