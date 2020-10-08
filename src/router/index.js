import Vue from 'vue'
import Router from 'vue-router' // 路由
import Home from '@/pages/home/home.vue' // 路由组件
import City from '@/pages/city/city.vue'
import Detail from '@/pages/detail/detail.vue'

Vue.use(Router) // 注册

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
