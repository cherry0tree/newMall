import {  USER_INFO } from './mutationTypes'

const actions = {
  syncUserInfo({
    commit,
  }, userInfo) {
    commit(USER_INFO, {
      userInfo
    })
  }
}

export default actions