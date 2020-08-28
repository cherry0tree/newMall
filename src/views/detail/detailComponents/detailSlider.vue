<template>
  <div class="detailSlider">
    <slider :autoplay="3000">
      <sliderItem v-for="(item, index) in topImages" :key="index" class="itemStyle">
          <img :src="item" alt="">
      </sliderItem>
    </slider>    
  </div>
</template>

<script>

import slider from '@/components/common/slider/slider.vue';
import sliderItem from '@/components/common/slider/sliderItem.vue';

  export default {
    name: 'detailSlider',
    components: {
      slider,
      sliderItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
.itemStyle{
  width: 100%;
  height: 250px;
}
</style>