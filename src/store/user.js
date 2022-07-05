import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      token: 'test'
    }
  },
  actions: {
    updateName (name) {
      this.name = name
    },
    refreshToken () {
      this.token = ''
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})
export default useUserStore
