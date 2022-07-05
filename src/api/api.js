import axios from 'axios'

// import { ElLoading, ElMessage } from 'element-plus' // 用于请求成功与否的弹框提醒和等待
import { ElMessage } from 'element-plus' // 用于请求成功与否的弹框提醒和等待
import useUserStore from '@/store/user'
import router from '@/router'

const userStore = useUserStore()

// 可以通过下面这个来获取vite中的环境是开发环境还是生产环境
// let { VITE_NORMALURL: normalUrl, MODE } = import.meta.env
// console.log('vite', import.meta.env)

// 如果为开发模式
// let baseURL = MODE == 'development' ? String(normalUrl) : String(normalUrl)
const baseURL = 'http://www.tianqiapi.com'
const instance = axios.create({
  baseURL, // 基础url
  timeout: 30000 // 请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const { token } = userStore
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.error(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(response)
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (!error.response.status) {
      return Promise.reject(error.response)
    }
    switch (error.response.status) {
      // 无权限，直接回到登录页
      case 401:
        ElMessage({
          message: '登录过期，请重新登录',
          type: 'error'
        })
        // 清除token
        userStore.refreshToken()
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        }, 1000)
        break
      // 404请求不存在
      case 404:
        ElMessage({
          message: '网络请求不存在',
          type: 'error'
        })
        break
      // 其他错误，直接抛出错误提示
      default:
        ElMessage({
          message: error.response.data.message,
          type: 'error'
        })
    }
    return Promise.reject(error.response)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export { instance }
