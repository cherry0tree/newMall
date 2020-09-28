/* eslint-disable */
import {  USER_INFO } from './mutationTypes'

const mutations = {
  addCart(state, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct) {
      oldProduct.count++;
    } else {
      payload.count = 1;
      payload.checked = true;
      state.cartList.push(payload);
    }
  },
  setUser(state, user) {
    state.user = user;
  },
  // 保存用户信息到本地
  [USER_INFO](state, {
  userInfo
  }) {
    //后台传过来的userinfo保存到state里面
    state.usersInfo = userInfo;
    console.log(state.usersInfo)
  }
}



export default mutations