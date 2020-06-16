
import Vue from 'vue'
import App from './App'
import router from './router'
// 项目初始化
import 'styles/reset.css'
import 'styles/border.css'
import fastClick from 'fastclick'
// 引入图标样式
import 'styles/iconfont.css'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// 引入vuex
import store from './store'
// 引入babel-polyfill
import 'babel-polyfill'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
