import { defineStore } from 'pinia'

import router from '@/router'

const useNavStore = defineStore({
  id: 'nav',
  state: () => {
    return {
      collapse: false, // 是否收缩菜单
      currentRouterPath: '/main',
      navList: [{ name: '首页', path: '/main' }] //, { name: '首页阿斯顿福建欧威1', path: '/main1' }, { name: '首页阿斯顿福建欧威2', path: '/main2' }, { name: '首页阿斯顿福建欧威3', path: '/main3' }, { name: '首页阿斯顿福建欧威4', path: '/main4' }, { name: '首页阿斯顿福建欧威5', path: '/main5' }, { name: '首页阿斯顿福建欧威6', path: '/main6' }, { name: '首页阿斯顿福建欧威7', path: '/main7' }, { name: '首页阿斯顿福建欧威8', path: '/main8' }, { name: '首页阿斯顿福建欧威9', path: '/main9' }
    }
  },
  actions: {
    deleteNavItem (index) {
      // console.log(router)
      if (this.navList.length < 1) {
        router.push('/')
        this.currentRouterPath = '/main'
      } else {
        if (this.currentRouterPath === this.navList[index].path) {
          this.navList.splice(index, 1)
          router.push(this.navList[index - 1].path)
          this.currentRouterPath = this.navList[index - 1].path
        } else {
          this.navList.splice(index, 1)
        }
      }
    },
    deleteOtherItem (index) {
      const item = this.navList[index]
      this.navList = [item]
      this.currentRouterPath = item.path
      router.push(item.path)
    },
    deleteAllItem () {
      this.navList = []
      this.currentRouterPath = '/main'
      router.push('/')
    },
    addNavItem (item) {
      this.currentRouterPath = item.path
      if (this.navList.find(chil => chil.path === item.path)) return
      this.navList.push(item)
    },
    goNavItem (item) {
      router.push(item.path)
      this.currentRouterPath = item.path
    },
    changeCollapse () {
      this.collapse = !this.collapse
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})
export default useNavStore
