/* eslint-disable */
import {request} from './request'

export function getPhoneCaptcha(phoneNumber) {
  return request({
    baseURL: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',
    url: 'send_code',
    params: {
      phoneNumber
    }
  })
}

export function phoneCaptchaLogin(phone, captcha) {
  console.log(phone)
  return request({
    baseURL: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',
    url: 'login_code',
    params: {
      phone,
      captcha
    },
    method: 'POST'
  })
}