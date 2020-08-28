<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabBar></mainTabBar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import mainTabBar from '@/components/content/mainTabBar/mainTabBar.vue'

import icon from '@/components/content/icon/icon.vue'
import SvgIcon from '@/components/content/icon/svg.vue'

export default {
    name: 'App',
    components: {
      mainTabBar,
      icon,
      SvgIcon
    }
}
</script>

<style>
  @import "assets/css/base.css";
</style>