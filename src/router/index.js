import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载
const home = () =>import('../views/home/home')
const cart = () =>import('../views/cart/cart')
const category = () =>import('../views/category/category')
const profile = () =>import('../views/profile/profile')
const detail = () => import('../views/detail/detail')
const login = () =>  import('../views/login/login')
const address = () =>  import('../views/address/address')
const addaddress = () =>  import('../views/addaddress/addaddress')
// 配置路由表
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/detail/:id',
    component: detail
  },
  //订单支付登录注册相关路由
  {
    path: "/login",
    component: login
  },
  {
    path: "/address",
    component: address
  },
  {
    path: "/addaddress",
    component: addaddress
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
