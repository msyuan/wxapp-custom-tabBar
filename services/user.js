import request  from './request'
import api from './api'

//登录
export function userLogin (param) {
  return request(api.user_logo, 'POST', param)
}