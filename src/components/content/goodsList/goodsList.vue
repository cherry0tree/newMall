<template>
<div class="goodsList">
  <goodsListItem v-for="(item, index) in goods" :key="index" :goods="item" clas></goodsListItem>
</div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name: 'goodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    goodsListItem
  }
}
</script>
<style scoped>
.goodsList{
  display: flex;
  flex-wrap: wrap;
}

</style>