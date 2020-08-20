//index.js
import { user_logo } from '../../services/api'
import request from '../../services/request'
import { product, swipeData } from "../../mock/product"

Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    productData: product,   //商品列表
    indicatordots: true,  //滑动控制参数
    interval: 3000,
    autoplay: true,
    duration: 500,
    swiperItem: swipeData,
  },
  methods: {
    login: function(){
      let data = {
        phone: '13xx8xx5x52',
        password: '111111'
      }
      request(user_logo, 'POST', data).then(res => {
         console.log(res)
      })
    }
  }
})
