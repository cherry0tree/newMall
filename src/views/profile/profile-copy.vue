<template>
  <div class="profile">

    <navBar class="navBar">
      <div slot="center">个人中心</div>
    </navBar>

    <div class="container">
      <div class="userInfo" @click="infoClick">
          <img src="@/assets/img/views/profile/user.png" alt="">
          <p>未登陆，请登录~</p>
      </div>
      <van-cell class="cellItem" title="个人信息" is-link @click="infoClick"></van-cell>
      <van-cell class="cellItem" title="我的订单" is-link @click="orderClick"></van-cell>
      <van-cell class="cellItem" title="我的地址" is-link @click="addressClick"></van-cell>
      <van-cell class="cellItem" title="设置" is-link></van-cell>

    </div>

  </div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue';
import { Cell, CellGroup} from "vant";
import 'vant/lib/index.css';

  export default {
    name: 'profile1',
    components: {
      navBar,
      [Cell.name]: Cell
    },
    methods: {
      infoClick() {
        this.$store.state.user.user ? this.$router.push("./info") : this.toLogin();
      },
      orderClick() {
      },
      addressClick() {
        this.$router.push("./address")
      },
      toLogin() {
        this.$router.push("./login");
      }
    }
  }
</script>
<style lang="less" scoped>
@import "@/assets/less/variable.less";

.navBar {
  position: relative;
  background-color:black;
  font-weight: 700;
  color: #ccc;
  z-index: 9;
}
.userInfo{
  width: 100%;
  height: 200px;
  background: @theme_background;
  text-align: center;
  img {
    width: 90px;
    height: 90px;
    margin-top: 30px;
  }
}
.cellItem{
  margin-bottom: 10px;
}
</style>