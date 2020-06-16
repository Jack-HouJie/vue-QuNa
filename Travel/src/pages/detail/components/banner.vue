<template>
  <div class="banner">
    <img class="banner-img"
         src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
         alt="">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
      <div class="banner-number">
        <div class="iconfont banner-icon">&#xe692; 39</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    right 0
    bottom 0
    left 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.3rem
      padding 0 0.2rem
    .banner-number
      line-height 0.32rem
      height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>
