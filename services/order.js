import request  from './request'
import api from './api'

//确定订单
export function confirmOrder (param) {
  return request(api.order_confirm, param)
}