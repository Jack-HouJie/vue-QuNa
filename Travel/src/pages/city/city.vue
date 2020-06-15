<template>
  <div>
  <CityHeader></CityHeader>
  <CitySearch></CitySearch>
  <CityList></CityList>
  <CityAlphabet></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped></style>
