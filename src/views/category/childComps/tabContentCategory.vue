<template>
<div class="tabContentCategory">
  <gridView :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="itemImg" :src="item.image" alt="">
        <div class="itemText">{{item.title}}</div>
      </a>
    </div>    
  </gridView>
</div>
</template>

<script>
import gridView from '@/components/common/gridView/gridView'

export default {
  name: 'tabContentCategory',
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    gridView
  }
}
</script>
<style scoped>
.itemImg{
  width: 80%;
}
.item {
  text-align: center;
  font-size: 12px;
}
.itemText{
  margin-top: 15px;  
}
</style>