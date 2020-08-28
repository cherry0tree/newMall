<template>
  <div class="tabBarItem" @click="itemClick">
    <div v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div v-else>
      <slot name="itemIconActive"></slot>
    </div>
    <!-- 先实现点击文字变颜色 -->
    <div :style="activeStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>
<style scoped>
.tabBarItem {
  flex: 1;
  text-align: center;
  height: 49;
}
.tabBarItem img {
  width: 24px;
  height: 24px;
}
</style>