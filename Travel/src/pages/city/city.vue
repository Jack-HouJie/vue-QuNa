<template>
  <div>
  <CityHeader></CityHeader>
  <CitySearch></CitySearch>
  <CityList></CityList>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang="stylus" scoped></style>
