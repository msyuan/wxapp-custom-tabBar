const config = require("../config/config")

/**
 * 封装统一请求方法request
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 */
export default function request (url, method = "GET", params) {
  let fullUrl = config.apiUrl + url;
  console.log("fullUrl", fullUrl)
  wx.showLoading({
    title: '加载中'
  })
  const token = wx.getStorageSync('token')
  let data = params || {};
  data.appId = config.appId
  let header = {
    token: token
  };
  return new Promise ((resolve, reject) => {
    wx.request({
      url: fullUrl,
      method: method,
      header: header,
      data: data,
      success (res) {
        wx.hideLoading()
        if(res.data && (res.data.status === 200 || res.data.status === 304)){
          resolve(res.data)
          return
        } else {
          // 未登录时做一些处理
          if(res.status === 401){
            // 切换到登录页面
            wx.navigateTo({
              url: '/pages/logo/login'
            })
          }else{
            console.log(res.data.message)
          }
        }
      },
      fail(res) {
        reject(res)
      }
    })
  })
}
