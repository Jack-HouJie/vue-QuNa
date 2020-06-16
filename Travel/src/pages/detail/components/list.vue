<template>
  <div>
    <div class="item"
         v-for="(item,index) of list"
         :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children"
           v-if="item.children">
        <DetailList :list="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item-title-icon
  position relative
  left 0.06rem
  top 0.06rem
  display inline-block
  width 0.36rem
  height 0.36rem
  background $bgColor
  margin-right 0.1rem
  background-size 0.4rem 3rem
.item-title
  line-height 0.8rem
  font-size 0.32rem
  padding 0 0.2rem
.item-children
  padding 0 0.2rem
</style>
