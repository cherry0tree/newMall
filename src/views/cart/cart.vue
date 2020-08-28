<template>
  <div class="cart">
    <navBar class="navbar">
      <div slot="center">购物车({{cartCount}})</div>
    </navBar>
    <scroll class="scrollContent" ref="scroll">
      <cartList @imgLoad="imgLoad"></cartList>
    </scroll>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue'
import scroll from '@/components/common/scroll/scroll.vue';

import cartList from './cartComponents/cartList.vue'
import bottomBar from './cartComponents/bottomBar.vue'

  export default {
    name: 'cart',
    components: {
      navBar,
      scroll,
      cartList,
      bottomBar
    },
    computed: {
      cartCount() {
        return this.$store.getters.cartListLength
      }
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
.cart {
  height: 100vh;
}
.navbar{
  position: relative;
  background-color:black;
  font-weight: 700;
  color: #ccc;
  z-index: 9;
}
.scrollContent{
  position: absolute;
  right: 0;
  left: 0;
  top: 44px;
  bottom: 46px;
}
</style>