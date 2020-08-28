<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'navBar'
  }
</script>
<style scoped>
.navBar {
  display: flex;
  position: relative;
  height: 44px;
  top: 0;
  left: 0;
  right: 0;
  line-height: 44px;
}
.left .right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>