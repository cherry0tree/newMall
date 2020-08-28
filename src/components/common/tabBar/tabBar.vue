<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabBar'
  }
</script>
<style scoped>
.tabBar{
  /* 不给高度，由插槽slot item撑开 以适配不同的设计尺寸 */
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;

  box-shadow: 0px -3px 1px rgba(0, 0, 0, .1);
}
</style>