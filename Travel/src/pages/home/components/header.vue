<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe7b3;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市</div>
    <span class="iconfont arrow-icon">&#xe7b2;</span>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus">
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

.back-icon {
  text-align: center;
  font-size: 0.4rem;
}

.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}

.header-right {
  width: 40px;
  padding-right: 3px;
  margin-left: 10px;
  float: right;
  text-align: center;
  color: #fff;
}

.arrow-icon {
  width: 0.5rem;
  margin-left: -0.04rem;
  font-size: 0.24rem;
}
</style>
