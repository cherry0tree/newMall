/* eslint-disable */
import axios from 'axios'

export function request(config) {
  
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  })

  // 判断请求发出来没有
  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  // 响应请求到的数据并返回
  instance.interceptors.response.use(res => {
    return res.data
  }, err => { 
  })

  return instance(config)
}