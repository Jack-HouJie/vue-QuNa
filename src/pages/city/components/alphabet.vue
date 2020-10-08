<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      // 提取cities对象的所有键，保存至数组
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false, // 滑动状态
      startY: 0,
      timer: null // 防抖定时器
    }
  },
  updated () {
    // offsetTop 拿到一个元素距离顶部高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (event) {
      if (this.touchStatus) {
        // 防抖
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 定位当前手指位置
          // event.touches[0]保存手指信息
          const touchY = event.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // 传出移动结束处手指所处字母下标
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 50)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  .item
    text-align center
    line-height 0.4rem
    color $bgColor
</style>
