<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  line-height: 44px;
  z-index: 3;
}

.left, .right {
  width: 60px;

}

.center {
  flex: 1;
  text-align: center;
}
</style>