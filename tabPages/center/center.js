//index.js
import { userLogin } from '../../services/user'
Component({
  pageLifetimes: {
    show(){
      if(typeof this.getTabBar === 'function' && this.getTabBar()){
        this.getTabBar().setData({
          selected: 2
        })
      }
      this.login()
    }
  },
  methods: {
    login: function(){
      let data = {
        phone: '13148454252',
        password: '111111'
      }
      userLogin(data).then(res => {
         console.log(res)
      })
    }
  }
})