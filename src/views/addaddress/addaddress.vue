<template>
<div class="addaddress">
  <navBar class="navBar">
      <img slot="left" src="@/assets/img/icons/back.svg" 
      alt=""
      class="back"
      @click="backClick">
      <div slot="center" class="loginText">新增地址</div>
  </navBar>

  <van-cell-group>
    <van-field v-model="addressInfo.name" required label="姓名" placeholder="请输入用户名" />
    <van-field v-model="addressInfo.tel" required clearable label="电话" placeholder="请输入电话号码" />
    <van-field v-model="addressInfo.post" required clearable label="邮编号" placeholder="请输入邮编号" />
    <van-field v-model="addressInfo.address" required clearable label="地址" placeholder="请输入地址" @click="onEditAddress" />
    <van-field v-model="addressInfo.detailAddress" type="textarea" label="详细地址" placeholder="请输入详细地址" rows="2" required autosize />
    <van-switch-cell v-model="addressInfo.isDefault" title="设为默认" />
  </van-cell-group>

  <div class="showArea" v-show="showArea">
    <van-area :area-list="areaList" value="510700" @cancel="onCancel" @confirm="onComfirm" ></van-area>
  </div>

<!-- van里面的button里面的danger -->
  <div class="bottomBar van-button--danger" @click="saveAddress">添加</div>

</div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue';
import { Area, Field, Dialog, SwitchCell, Cell, CellGroup, Icon, Toast } from "vant";
import 'vant/lib/index.css';
import areaList from "@/assets/js/areaList.js";

export default {
  name: 'addaddress',
  components: {
    navBar,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Area.name]: Area,
    [SwitchCell.name]: SwitchCell,
    [CellGroup.name]: CellGroup
  },
  created() {
    this.areaList = areaList;
  },
  data() {
    return {
      addressInfo: {
        name: "名字",
        tel: "13678232323",
        post: "62345",
        address: "四川省 成都市 武侯区",
        detailAddress: "南湖国际",
        isDefault: false
      },
      showArea: false,
      areaList: {}
    }
  },
  methods: {
    backClick(){
      this.$router.back();
    },
    onEditAddress() {
      this.showArea = !this.showArea;
    },
    onCancel() {
      this.showArea = false;
    },
    onComfirm(val) {
      this.addressInfo.address = ""
      //首先需要知道回调的数据格式 再进一步处理
      console.log(val)
      val.map(item => {
        this.addressInfo.address = `${this.addressInfo.address} ${item.name}`
      })
      this.showArea = false;
    },
    saveAddress() {
      
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
.showArea {
  position: absolute;
  bottom: 50px;
  width: 100%;
}
.bottomBar {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: @base_color;
  font-size: 14px;
  text-align: center;
  z-index: 1;
}
</style>