// import * as types from "./mutationTypes";

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
  }
}

export default mutations