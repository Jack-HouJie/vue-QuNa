<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <div class="iconfont banner-icon">&#xe692; {{this.gallaryImgs.length}}</div>
        </div>
      </div>
    </div>
    <fadeAnimation>
      <CommonGallary :imgs="gallaryImgs"
                     v-show="showGallary"
                     @close="handleGallaryClick"></CommonGallary>
    </fadeAnimation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import fadeAnimation from 'common/fade/fadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    fadeAnimation
  }
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
