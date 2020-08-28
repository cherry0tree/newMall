<template>
<div class="detailRecommend">
  <div class="infoHeader">热门推荐</div>
  <gridView>
    <goodsList :goods="recommendList"></goodsList>
  </gridView>
</div>
</template>

<script>
import gridView from '@/components/common/gridView/gridView.vue'
import goodsList from '@/components/content/goodsList/goodsList.vue'
export default {
  name: 'detailRecommend',
  props: {
    recommendList: {
      type: Array
    }
  },
  components: {
    gridView,
    goodsList
  }
}
</script>
<style scoped>
.infoHeader {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>