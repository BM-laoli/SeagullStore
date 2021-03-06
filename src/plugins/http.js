// 注意，由于这个阿里佰秀的服务器没有登录tokne的校验功能！！！不必设置拦截器
import axios from 'axios'
import router from '../router'
import Vue from 'vue'


import vm from '../main'
import { LOADING, UNLOADING } from '../store/mutations-types'

const http = axios.create({
  baseURL: 'http://112.124.109.250:3045'
  // baseURL: 'http://localhost:3045'
})





// v1接口请求拦截 两个出口,配置token
http.interceptors.request.use(
  (config) => {

    vm.$store.commit(LOADING)

    if (sessionStorage.token) {
      console.log(sessionStorage.token, '<====token');
      config.headers.token = sessionStorage.token
    }

    return config
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)
// v1接口拦截调请求
//我们在这里全局捕获错误，进行统一的错误处理,定义一个拦截器,response
http.interceptors.response.use(
  (res) => {

    setTimeout(() => {
      // Vue.__Shop_Scope.unloading()
      vm.$store.commit(UNLOADING)
    }, 500);

    return res
    // 什么情况下 是会跑去err?只要不是正常的状态码
  },
  (err) => {
    if (err.response.data.message) {
      setTimeout(() => {
        // Vue.__Shop_Scope.unloading()
        vm.$store.commit(UNLOADING)
      }, 2000);
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message,
      })
    }
    // 这里我们约定一个规则，有错就放回一个message,这个message里的就是我们要回显式的信息
    // console.log(err.response.data.message);
    // 我们把讯息挂在到vue原行上,message是ele-ui上的一个方法，可以弹出一些错误讯息
    if (err.response.status === 401) {
      router.push('/login')
    }

    return Promise.reject(err)
  }
)

export default http
