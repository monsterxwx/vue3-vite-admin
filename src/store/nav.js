import { defineStore } from 'pinia'

import router from '@/router'

const useNavStore = defineStore({
  id: 'nav',
  state: () => {
    return {
      collapse: false, // 是否收缩菜单
      isSmallScreen: false, // 是否小屏状态，小屏状态时左侧menu通过抽屉形式弹出
      isShowMenu: false, // 小屏状态使用，记录是否需要显示菜单
      defaultPath: { name: '默认', path: '/test1' },
      currentRouterPath: { name: '默认', path: '/test1' },
      navList: [{ name: '默认', path: '/test1' }],
      routerList: [
        {
          name: '组件测试',
          id: '1',
          children: [
            {
              path: '/test1',
              name: '默认',
              id: '1-1'

            },
            {
              name: '表格',
              id: '1-2',
              children: [
                {
                  path: '/test2',
                  name: '普通表格',
                  id: '1-2-1'
                },
                {
                  path: '/test22',
                  name: 'render表格',
                  id: '1-2-2'
                }
              ]
            },
            {
              path: '/test3',
              name: 'echart',
              id: '1-3'
            },
            {
              path: '/test4',
              name: '表单',
              id: '1-4'
            },
            {
              path: '/overflow',
              name: 'overflow',
              id: '1-5'
            },
            {
              path: '/virlist',
              name: '虚拟滚动',
              id: '1-6'
            }
          ]
        },
        {
          name: '其他',
          id: '2'
        }
      ]
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
    enabled: false
  }
})
export default useNavStore
