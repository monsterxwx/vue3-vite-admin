import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => {
    return {
      isDark: useDark()
    }
  },
  actions: {
    changeTheme () {
      this.isDark = !this.isDark
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})
export default useThemeStore
