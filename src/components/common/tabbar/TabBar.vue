<template>
<div class="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style>
  .tab-bar {
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;

    box-shadow: 0px -3px 1px rgba(0, 0, 0, .1);
  }
</style>