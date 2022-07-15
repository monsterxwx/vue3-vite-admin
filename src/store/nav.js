import { defineStore } from 'pinia'

import router from '@/router'

const useNavStore = defineStore({
  id: 'nav',
  state: () => {
    return {
      collapse: false, // 是否收缩菜单
      isSmallScreen: false, // 是否小屏状态，小屏状态时左侧menu通过抽屉形式弹出
      isShowMenu: false, // 小屏状态使用，记录是否需要显示菜单
      defaultPath: { name: '首页', path: '/main' },
      currentRouterPath: { name: '首页', path: '/main' },
      mouseSelectPath: '', // 鼠标移动到标签对应的path，用于是否显示关闭按钮
      navList: [{ name: '首页', path: '/main' }]
    }
  },
  actions: {
    deleteNavItem (index) {
      if (this.navList.length < 1) {
        router.push('/')
        this.currentRouterPath = this.defaultPath
      } else {
        if (this.currentRouterPath.path === this.navList[index].path) {
          this.navList.splice(index, 1)
          router.push(this.navList[index - 1].path)
          this.currentRouterPath = this.navList[index - 1]
        } else {
          this.navList.splice(index, 1)
        }
      }
    },
    deleteOtherItem (index) {
      const item = this.navList[index]
      this.navList = [item]
      this.currentRouterPath = item
      router.push(item.path)
    },
    deleteAllItem () {
      this.navList = []
      this.currentRouterPath = this.defaultPath
      router.push('/')
    },
    addNavItem (item) {
      this.currentRouterPath = item
      if (this.navList.find(chil => chil.path === item.path)) return
      this.navList.push(item)
    },
    goNavItem (item) {
      router.push(item.path)
      this.currentRouterPath = item
    },
    changeCollapse () {
      this.collapse = !this.collapse
    },
    updateMouseSelect (path) {
      this.mouseSelectPath = path
    },
    changeScreen (isTrue) {
      this.isSmallScreen = isTrue
      if (this.isSmallScreen) {
        this.collapse = false
      }
    },
    changeMenuShow (isTrue) {
      this.isShowMenu = !this.isShowMenu
      if (!isTrue) {
        this.isShowMenu = false
      }
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})
export default useNavStore
