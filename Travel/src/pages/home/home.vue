
<template>
  <div>
    <div>
      <!-- 使用子组件 -->
      <home-header></home-header>
      <HmoeSwiper></HmoeSwiper>
      <HmoeIcons></HmoeIcons>
      <HmoeRecommend></HmoeRecommend>
    </div>
  </div>
</template>

<script>
// 引入子组件
import HomeHeader from './components/header'
import HmoeSwiper from './components/swiper'
import HmoeIcons from './components/icons'
import HmoeRecommend from './components/recommend'

export default {
  name: 'home',
  // 声明局部组件
  components: {
    HomeHeader,
    HmoeSwiper,
    HmoeIcons,
    HmoeRecommend
  }
}
</script>

<style>
</style>
