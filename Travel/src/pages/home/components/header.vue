<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  background $bgColor
  line-height $headerHeight
  color #fff
  .header-left
    float left
    width 0.64rem
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.11rem
    margin-left 0.2rem
    border-radius 0.1rem
    padding-left 0.2rem
    background #fff
    color #ccc
  .header-right
    float right
    padding: 0 .1rem
    min-width 1.04rem
    text-align center
    color #fff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>
