<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list="list"></DetailList>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '学生票',
        children: [{
          title: '学生三馆联票',
          children: [{
            title: '学生三馆联票套餐一'
          }, {
            title: '学生三馆联票套餐二'
          }]
        }, {
          title: '学生五馆联票'
        }]
      }, {
        title: '成人票'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content
  height 50rem
</style>
