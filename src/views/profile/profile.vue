<template>
<div class="profile">
  <navBar class="navBar">
    <div slot="center">个人中心</div>
  </navBar>

  <!-- 未登录状态 -->
  <userInfo v-if="!usersInfo.token"></userInfo>
  
  <!-- 已登录状态 -->
  <div class="personMsg"
       v-if="usersInfo.token">
    <img :src="user_image.login_icon" alt="">
    <div class="personInfo">
      <span>{{usersInfo.user_name}}</span>
    </div>
  </div>

  <section class="account">
    <div class="account-item">
      <span class="balance">0.00</span>元
      <div class="account-info">我的余额</div>
    </div>  
    <div class="account-item">
      <span class="balance">0</span>个
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <span class="balance">0</span>分
      <div class="account-info">我的积分</div>
    </div>    
  </section>

  <listView :listData="orderList" class="order-list"></listView>
  <list-view :list-data="serviceList" class="service-list"></list-view>
</div>
</template>

<script>
import navBar from '@/components/common/navBar/navBar.vue';

import userInfo from './childComps/userInfo'
import listView from './childComps/listView'

import { mapState } from 'vuex'

export default {
  name: 'profile',
  components: {
    navBar,
    userInfo,
    listView
  },
  data() {
    return {
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'}
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'}
      ],
      user_image: {
        login_icon: require('../../assets/img/views/profile/defaultImg.jpeg')
      }
    }
  },
  computed: {
    ...mapState(['usersInfo'])
  }
}
</script>
<style scoped>
.navBar {
  position: relative;
  background-color:black;
  font-weight: 700;
  color: #ccc;
  z-index: 9;
}
.account {
  display: flex;
}
.account-item{
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
  color: #666;
  font-size: 13px;
  padding: 18px;
}
.account-item .balance{
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}
.order-list, .service-list {
  margin-top: 12px;
}
.personMsg{
  display: flex;
  align-items: center;  
}
.personMsg img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.personInfo {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;  
}
</style>