<template>
<div class="tabContentdetail">
  <!-- <gridView>
    <goodsList v-for="(item, index) in categoryDetail" :key="index" :goods="item">

    </goodsList>
  </gridView> -->
</div>
</template>

<script>
/* eslint-disable */
import goodsList from '@/components/content/goodsList/goodsList.vue';
import gridView from '@/components/common/gridView/gridView'

export default {
  name: 'tabContentdetail',
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    goodsList,
    gridView
  }
}
</script>
<style scoped>

</style>