<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-btn">&#xe743;</div>
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
@import '~styles/varibles.styl'
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

.back-btn {
  text-align: center;
  font-size: 0.4rem;
}

.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  background: #fff;
  border-radius: 5px;
  margin-left: 0.2rem;
  margin-top: 0.12rem;
  color: #ccc;
  padding-left: 0.2rem;
}

.header-right {
  float: right;
  width: 1.0rem;
  text-align: center;
}

.arrow-icom {
  font-size: 0.3rem;
  padding-right: 0.4rem;
}
</style>
