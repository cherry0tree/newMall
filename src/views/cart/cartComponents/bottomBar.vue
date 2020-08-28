<template>
<div class="bottomBar">
  <CheckButton class="selectAll" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton>
  <span>全选</span>
  <span class="totalPrice">合计：¥{{totalPrice}}</span>
  <span class="buyProduct">去结算({{$store.getters.cartCount}})</span>
</div>
</template>

<script>
/* eslint-disable */
import CheckButton from './checkButton'
export default {
  name: 'bottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      const cartList = this.$store.getters.cartList
      return cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0).toFixed(2)
    },
    isSelectAll() {
      return this.$store.getters.cartList.find(item => item.checked === false) === undefined
    }
  },
  methods: {
    checkBtnClick() {
      // 判断是否有未选中的按钮
      let isSelectedAll = this.$store.getters.cartList.find(item => !item.checked)

      if(isSelectedAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        })
      }
    }
  }
}
</script>
<style scoped>
.bottomBar{
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 45px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  line-height: 44px;
  color: #888;
  padding-left: 35px;
  box-sizing: border-box;
}
.totalPrice{
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.selectAll{
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.buyProduct {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>