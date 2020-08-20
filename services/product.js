import request  from './request'
import api from './api'

//获取商品
export function getProduct (param) {
  return request(api.product_list, param)
}