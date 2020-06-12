
<template>
  <div>
    <div>
      <!-- 使用子组件 -->
      <home-header></home-header>
      <HmoeSwiper></HmoeSwiper>
    </div>
  </div>
</template>

<script>
// 引入子组件
import HomeHeader from './components/header'
import HmoeSwiper from './components/swiper'
export default {
  name: 'home',
  // 声明局部组件
  components: {
    HomeHeader,
    HmoeSwiper
  }
}
</script>

<style>
</style>
