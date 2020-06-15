<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             placeholder="输入城市名或拼音"
             v-model="keyword">
    </div>
    <div class="serch-content"
         ref="serch"
         v-show="keyword">
      <ul>
        <li class="serch-item border-bottom"
            v-for="item of list"
            :key="item.id">{{item.name}}</li>
        <li class="serch-item border-bottom"
            v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 节流
      if (this.timer) {
        clearTimeout(this.time)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.serch)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  background $bgColor
  padding 0 0.1rem
  .search-input
    box-sizing border-box
    padding-left 0.1rem
    padding-right 0.1rem
    height 0.62rem
    line-height 0.62rem
    width 100%
    text-align center
    border-radius 0.06rem
    color #666
.serch-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  right 0
  bottom 0
  left 0
  background #eee
  .serch-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background #fff
</style>
