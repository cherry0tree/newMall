<template>
<div class="addaddress">
  <navBar class="navBar">
      <img slot="left" src="@/assets/img/icons/back.svg" 
      alt=""
      class="back"
      @click="backClick">
      <div slot="center" class="loginText">添加地址</div>
  </navBar>

  <van-address-edit
		style="background-color: #fff;"
		:areaList="areaList"
		:addressInfo="addressInfo"
		:isSaving="isSave"
		showPostal
		@save="save"> 
  </van-address-edit>

</div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue';
import { AddressEdit } from "vant";
import 'vant/lib/index.css';
import areaList from "@/assets/js/areaList.js";

export default {
  name: 'addaddress',
  components: {
    navBar,
    [AddressEdit.name]: AddressEdit
  },
  data() {
    addressInfo: {
      
    }
  }
}
</script>

<style lang="less" scoped>
@import "@/assets/less/variable.less";
.navBar{
  position: relative;
  background-color:black;
  font-weight: 700;
  color: #ccc;
  z-index: 9;
}
.back{
  width: 60px;
  height: 20px;
  margin-top: 12px;
}
.loginText{
  margin-right: 50px;
}
</style>