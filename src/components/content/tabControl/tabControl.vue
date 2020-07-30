<template>
  <div class="tabControl">
    <!-- 可以通过传参决定创建几个span -->
    <div v-for="(item,index) in titles" 
     class="tabControlItem" 
    :class="{active: index === currentIndex}"
    @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }

}
</script>

<style>
.tabControl {
  display: flex;
}
.tabControlItem {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  z-index: 4;
}
.active span {
    border-bottom: 1px solid red;
    padding: 5px;
}
.active {
  color: red;
}
</style>