<template>
  <div class="homeSlider">
    <slider :autoplay="3000">
      <sliderItem v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </sliderItem>
    </slider>
  </div>
</template>

<script>

import slider from '@/components/common/slider/slider.vue';
import sliderItem from '@/components/common/slider/sliderItem.vue';

  export default {
    name: 'homeSlider',
    props: {
      banner: {
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
<style scoped>

</style>