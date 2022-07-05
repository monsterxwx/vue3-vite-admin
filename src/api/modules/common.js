import { get, post } from '../api'

export default {
  // 登录
  getTianqi: (data) => get('/api', data),
  logined: (data) => post('/login', data)
}
