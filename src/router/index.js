import Vue from 'vue'
// 路由
import Router from 'vue-router'
// 路由组件
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'
import Detail from '@/pages/detail/detail.vue'
// 注册
Vue.use(Router)

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
