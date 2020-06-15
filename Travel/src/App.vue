<template>
  <div id="app">
    <keep-alive>
      <!-- 显示当前路由地址对应内容 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
