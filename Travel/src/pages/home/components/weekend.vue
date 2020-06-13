<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          title: '欧洲三天游',
          desc: '遨游欧罗巴，体验欧洲美景',
          imgUrl:
            'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        },
        {
          id: '0002',
          title: '北京圆明园',
          desc: '相约北京圆明园！',
          imgUrl:
            'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        },
        {
          id: '0003',
          title: '北京天安门',
          desc: '相约北京天安门',
          imgUrl:
            'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  width 100%
  height 31.25vw
  background-color #eee
  .item-img
    width 100%
.item-title
  line-height 0.54rem
  font-size 0.32rem
  ellipsis()
.item-desc
  line-height 0.4rem
  color #ccc
  ellipsis()
</style>
