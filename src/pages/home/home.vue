
<template>
  <div>
    <div>
      <!-- 使用子组件 -->
      <home-header></home-header>
      <hmoe-swiper :list="swiperList"></hmoe-swiper>
      <home-icons :list="iconList"></home-icons>
      <HomeRecommend :list="recommendList"></HomeRecommend>
      <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
  </div>
</template>
<script>
// 引入子组件
import HomeHeader from './components/header'
import HmoeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  // 声明局部组件
  components: {
    HomeHeader,
    HmoeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
