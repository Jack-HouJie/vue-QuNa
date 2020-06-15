
<template>
  <div>
    <div>
      <!-- 使用子组件 -->
      <home-header ></home-header>
      <HmoeSwiper :list="swiperList"></HmoeSwiper>
      <HmoeIcons :list="iconList"></HmoeIcons>
      <HomeRecommend :list="recommendList"></HomeRecommend>
      <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
  </div>
</template>
<script>
// 引入子组件
import HomeHeader from './components/header'
import HmoeSwiper from './components/swiper'
import HmoeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'home',
  // 声明局部组件
  components: {
    HomeHeader,
    HmoeSwiper,
    HmoeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
