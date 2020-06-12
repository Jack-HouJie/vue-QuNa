<template>
  <div class="header">
    <div class="header-left">
      <!-- <div class="iconfont back-icon">&#xe743;</div> -->
      返回
    </div>
    <div class="header-input">
      <!-- <span class="iconfont">&#xe7b3;</span> -->
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市</div>
    <!-- <span class="iconfont arrow-icon">&#xe7b2;</span> -->
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;
}

.header-left {
  float: left;
  width: 0.64rem;
}

.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.11rem;
  margin-left: 0.2rem;
  border-radius: 0.1rem;
  background: #fff;
  color: #ccc;
}

.header-right {
  float: right;
  width: 1.24rem;
  text-align: center;
  color: #fff;
}

</style>
