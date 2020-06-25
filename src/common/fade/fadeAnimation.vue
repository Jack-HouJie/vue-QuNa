<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'fadeAnimation'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.v-enter, .v-leave-to
  opacity 0
.v-enter-active, .v-leave-active
  transition opacity .5s
</style>
