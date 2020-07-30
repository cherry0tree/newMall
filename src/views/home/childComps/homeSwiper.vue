<template>
    <slider :autoplay="3000">
    <sliderItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </sliderItem>
  </slider>
</template>

<script>
import slider from 'components/common/slider/slider.vue'
import sliderItem from 'components/common/slider/sliderItem.vue'

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    slider,
    sliderItem
  }

}
</script>

<style>

</style>