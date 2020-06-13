<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl">
      </swiper-slide>
      <div slot="pagination"
           class="swiper-pagination">
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  // ES6:对象值是一个函数的写法
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 31.25vw
  background-color #eee
.swiper-img
  width 100%
</style>
