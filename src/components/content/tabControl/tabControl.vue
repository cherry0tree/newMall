<template>
  <div class="tabControl">
    <div v-for="(item, index) in title" 
         :key="index"
         class="tabControlItem"
         :class="{active: curIndex === index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabControl',
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        curIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.curIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>
<style scoped>
.tabControl{
  display: flex;
}
.tabControlItem{
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.active {
  color: red;
}
.active span {
  border-bottom: 1px solid red;
  padding: 5px;
}
</style>