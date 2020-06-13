<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl"
               class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HmoeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          title: '上海迪士尼乐园热卖套餐1',
          desc: '重逢上海迪士尼乐园八折起!重逢上海迪士尼乐园八折起!',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/5e51283d-0d0f-4a4c-b261-dc89766df84d.jpg_168x160_ea8c5983.jpg'
        },
        {
          id: '0002',
          title: '上海迪士尼乐园热卖套餐2',
          desc: '重逢上海迪士尼乐园八折起!重逢上海迪士尼乐园八折起!',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/5e51283d-0d0f-4a4c-b261-dc89766df84d.jpg_168x160_ea8c5983.jpg'
        },
        {
          id: '0003',
          title: '上海迪士尼乐园热卖套餐3',
          desc: '重逢上海迪士尼乐园八折起!重逢上海迪士尼乐园八折起!',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/5e51283d-0d0f-4a4c-b261-dc89766df84d.jpg_168x160_ea8c5983.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.recommend-title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
</style>
