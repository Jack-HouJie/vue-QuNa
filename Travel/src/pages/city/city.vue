<template>
  <div>
  <CityHeader></CityHeader>
  <CitySearch></CitySearch>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped></style>
