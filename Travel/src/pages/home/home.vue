
<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 引入子组件
import HomeHeader from './components/header'
export default {
  name: 'home',
  // 声明局部组件
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>
