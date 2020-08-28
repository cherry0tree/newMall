<template>
<div class="login">
  <navBar class="navBar">
    <img slot="left" src="@/assets/img/icons/back.svg" 
    alt=""
    class="back"
    @click="backClick">
    <div slot="center" class="loginText">登录</div>
  </navBar>

  <div class="loginContent">
    <van-cell-group>
        <van-field v-model="userAccount" label="用户姓名" 
                  required clearable left-icon="contact"
                  placeholder = "请输入姓名">
        </van-field>
        <van-field v-model="userPasswd" left-icon="edit" 
                    type="password" label="密码" placeholder="请输入用户密码" 
                    required>
        </van-field>
    </van-cell-group>
  </div>
  <van-button class="loginBtn" size="small" round type="info">
    登录
  </van-button>
  <div class="register">还没有账号？进行注册...</div>

</div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue';
import { Toast, NavBar, Cell, CellGroup, Field, Button } from "vant";
import 'vant/lib/index.css';

export default {
  name: 'login',
  components: {
    navBar,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field
  },
  methods: {
    backClick() {
      this.$router.back();
    }
  },
  data() {
    return {
      userAccount: "",
      userPasswd: ""
    }
  }
}
</script>
<style scoped>
.login {
  height: 800px;
  background-color: #ecedf5;
}
.loginContent{
  text-align: center;
  margin-top: 94px;
  margin-left: 10px;
  margin-right: 10px;
}
.navBar {
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
.loginBtn {
  margin: 20px;
  margin-left: 100px;
  width: 100px;
}
.register {
  position: absolute;
  bottom: 70px;
  right: 0;
  left: 0;
  color: black;
  font-size: 12px;
  text-align: center;
}

</style>