<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/1.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/2.png" alt=""> 
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/2.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/1.png" alt="">
      <div slot="item-text">种类</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/3.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/4.png" alt="">
      <div slot="item-text">个人</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/4.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/3.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar';
import TabBarItem from '@/components/common/tabbar/TabBarItem';

export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
