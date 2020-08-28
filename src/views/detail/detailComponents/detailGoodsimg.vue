<template>
<div v-if="Object.keys(detailImg).length != 0">
  <div class="imgDesc">{{detailImg.desc}}</div>
  <div class="imgKey">{{detailImg.detailImage[0].key}}</div>
  <div v-for="(item, index) in detailImg.detailImage[0].list" :key="index">
    <img :src="item" alt="" class="imgStyle" @load="imgLoad">
  </div>
</div>
</template>

<script>
export default {
  name: 'detailGoodsimg',
  props: {
    detailImg: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>
<style scoped>
.imgDesc{
  padding: 15px 0;
  font-size: 14px;
}
.imgKey{
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.imgStyle {
  width: 100%;
}
</style>