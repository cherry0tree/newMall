<template>
<div class="login">
  <div class="loginBox">
    <div class="auth-form">
      <img :src="imageURL" alt="">
    <!-- 关闭 -->
      <van-icon name="close" class="closeButton" />
      <van-tabs v-model="active" animated>
        <van-tab title="登录">
          <!-- 账号密码登录 -->
          <van-cell-group v-show="isShowSMSLogin">
            <van-field v-model="login_userName"
                       required
                       clearable
                       label="手机号码"
                       maxlength="11"
                       :error-message="phoneNumberRight? '' : '请输入正确的号码'"
                       placeholder="请输入手机号码"/>
            <van-field v-model="login_password"
                       required
                       type="password"
                       label="密码"
                       placeholder="请输入登录密码"
            />
            <van-field v-model="imgCaptcha"
                       center
                       clearable
                       maxlength="4"
                       placeholder="请输入验证码">
              <img class="verificationImage" 
                   src="http://demo.itlike.com/web/xlmc/api/captcha" 
                   alt="captcha"
                   slot="button"
                   @click="getCaptcha"
                   ref="imgCaptcha"
                   >
            </van-field>
          </van-cell-group>
          <!-- 手机号快捷登录 -->
          <van-cell-group v-show="!isShowSMSLogin">
            <van-field v-model="login_phone"
                       required
                       clearable
                       label="手机号码"
                       maxlength="11"
                       :error-message="phoneNumberRight? '' : '请输入正确的号码'"
                       placeholder="请输入手机号码"/>
            <van-field center
                        clearable
                        required
                        label="验证码"
                        maxlength="6"
                        v-model="smsCaptcha"
                        placeholder="输入短信验证码">
              <van-button v-if="!countDown"
                          slot="button"
                          size="small"
                          type="primary"
                          @click="sendVerifyCode">验证码</van-button>
              <van-button v-else
                          slot="button"
                          size="small"
                          type="primary"
                          disabled=""
                          v-model="smsCaptcha">已发送{{countDown}}s</van-button>                          
            </van-field>                                  
          </van-cell-group>

          <van-button type="info"
                      size="large"
                      style="margin-top:1rem"
                      @click='login'>登录</van-button>

          <div class="switchLogin" @click="switchLogin">
            {{this.isShowSMSLogin?'手机短信登录': '账号密码登录'}}
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import { Toast, Dialog, Icon, Tab, Tabs, Cell, CellGroup, Field, Button} from 'vant';
import 'vant/lib/index.css';
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Button)

import { getPhoneCaptcha } from '@/network/login'

export default {
  name: 'login',
  data() {
    return{
      active: 0,
      timeIntervalID: 0,
      countDown: 0,                 // 验证码倒计时
      imageURL: require('../../assets/img/views/login/normal.png'),
      login_userName: '',            // 用户名登录
      login_password: '',           // 用户密码
      login_phone: '',              // 手机号码登录

      register_userName: '',        // 注册用户名
      register_pwd: '',             // 注册密码

      isShowSMSLogin: false,         // 是否短信登录
      imgCaptcha: '',               // 图片验证码

      smsCaptcha: '',               // 短信验证码
      smsCaptchaResult: null      // 短信验证码结果
    }
  },
  computed: {
    // 1.手机号码验证
    phoneNumberRight() {
      let value = this.isShowSMSLogin ? this.login_userName : this.login_phone;
      if (value.length > 10) {
        return /[1][3,4,5,6,7,8][0-9]{9}$/.test(value);
      } else {
        return true;
      }
    },
    // 2.发送验证码按钮显示
    captchaDisable(){
      if(this.login_userName.length > 10 && this.phoneNumberRight) {
        return false;
      }else {
        return true;
      }
    }    
  },
  methods:{
    //获取手机验证码
    async sendVerifyCode() {
      this.countDown = 60;
      this.timeIntervalID = setInterval(() => {
        this.countDown--;
        if (this.countDown == 0) {
          clearInterval(this.timeIntervalID);
        }        
      }, 1000)
      //获取短信验证码
      console.log(this.login_phone)
      let result = await getPhoneCaptcha(this.login_phone);
      if (result.success_code == 200){
          this.smsCaptchaResult = result.data.code;
          //获验证码成功
          Dialog.alert({
            title: '温馨提示',
            message: '手机验证码为' + result.data.code
          }).then(() => {
          });
      }
    },

     // 3.账号密码登录切换图片验证码
    getCaptcha() {
      // 获取验证码的标签,img
      let captchaEle = this.$refs.imgCaptcha;
      this.$set(captchaEle, 'src', 'http://demo.itlike.com/web/xlmc/api/captcha?time=' + new Date());
    },
    switchLogin() {
      this.isShowSMSLogin = !this.isShowSMSLogin;
    },
    phoneRegex(number){
      return (/[1][3,4,5,6,7,8][0-9]{9}$/.test(number));
    },
    login() {
        // 5.2 账号密码登录
        // 5.2.1 验证输入框
       if(this.isShowSMSLogin) { 
          if(!this.phoneRegex(this.login_userName)) {
            Toast({
              message: '格式不正确,请输入正确的手机号码',
              duration: 800
            })
            return;
          } else if (this.login_password.length < 1) {
            Toast({
              message: '请输入正确的密码',
              duration: 800
            });
            return;          
          } else if (this.imgCaptcha.length < 1) {
            Toast({
              message: '请输入正确的验证码',
              duration: 800
            });
            return;        
          } else {
            this.$router.back();
          }
        } else {
          //短信登录
          if (!this.phoneNumberRight || this.login_phone.length < 10) {
            Toast({ 
              message: '请输入正确的手机号码',
              duration: 800
            })
            return;
          } else if (this.smsCaptcha < 7 || this.smsCaptcha != Number(this.smsCaptchaResult)) {
            Toast({
              message: '验证码不正确，请输入正确的验证码',
              duration: 800
            });
            return;            
          } else {
            this.$router.back();
          }
        }
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../assets/img/views/login/back2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .loginBox{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    .auth-form{
      position: relative;
      padding: 2rem;
      width: 26.5rem;
      max-width: 90%;
      font-size: 1.167rem;
      background-color: #fff;
      opacity: 0.85;
      border-radius: 8px;
    }
    img{
      position: absolute;
      top: 1rem;
      left: 50%;
      width: 4rem;
      transform: translate(-50%, -70%);
      z-index: 1;
      @media screen and (max-width: 320px) {
        top: 0.5rem;
        transform: translate(-50%, -40%);
        width: 5rem;
      }      
    }
    .closeButton{
      position: absolute;
      right: 1rem;
      top: 0.4rem;     
    }
    .verificationImage{
      position: absolute;
      right: 0;
      width: 8rem;
      height: 3rem;
      margin-left: 3rem;      
    }
    .switchLogin {
      margin-top: 1rem;
      font-size: 0.78rem;
    }
  }
}
</style>