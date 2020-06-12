<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content"
             src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">民宿客栈</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  float: left;
  overflow: hidden;
  height: 0;
  width: 25%;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: $darkTextColor;
  text-align: center;
}
</style>
