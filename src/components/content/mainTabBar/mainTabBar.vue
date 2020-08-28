<template>
  <div class="mainTabBar">
    <tabBar>
      <tabBarItem path="/home">
        <img slot="itemIcon" src="@/assets/img/views//home/home.svg" alt="">
        <img slot="itemIconActive" src="@/assets/img/views/home/home_active.svg" alt="">
        <div slot="itemText" activeColor="blue">首页</div>
      </tabBarItem>
      <tabBarItem path="/category">
        <img slot="itemIcon" src="@/assets/img/views/category/category.svg" alt="">
        <img slot="itemIconActive" src="@/assets/img/views/category/category_active.svg" alt="">
        <div slot="itemText" activeColor="blue">种类</div>
      </tabBarItem>
      <tabBarItem path="/profile">
        <img slot="itemIcon" src="@/assets/img/views/profile/profile.svg" alt="">
        <img slot="itemIconActive" src="@/assets/img/views/profile/profile_active.svg" alt="">
        <div slot="itemText" activeColor="blue">个人</div>
      </tabBarItem>
      <tabBarItem path="/cart">
        <img slot="itemIcon" src="@/assets/img/views/cart/cart.svg" alt="">
        <img slot="itemIconActive" src="@/assets/img/views/cart/cart_active.svg" alt="">
        <div slot="itemText" activeColor="blue">购物车</div>
      </tabBarItem>                  
    </tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/tabBar/tabBar.vue'
import tabBarItem from '@/components/common/tabBar/tabBarItem.vue'

  export default {
    name: 'mainTabBar',
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>
<style scoped>

</style>