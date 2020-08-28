<template>
<scroll class="tabMenu">
  <div class="menuListItem"
       v-for="(item, index) in categories"
       :key="index"
       @click="itemClick(index)"
       :class="{active: index === curIndex}"
       >
    {{item.title}}
  </div>

  <div>

  </div>
</scroll>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue';

export default {
  name: 'tabMenu',
  props: {
    categories: {
      type: Array
    }
  },
  components: {
    scroll
  },
  data() {
    return {
      curIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.curIndex = index;
      this.$emit('selectItem', index)
    }
  }
}
</script>
<style scoped>
.tabMenu{
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.menuListItem{
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active{
  font-weight: 700;
  color: orangered;
  background-color: #fff;
  border-left: 3px solid orangered;
}
</style>