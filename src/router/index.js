import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '@/utils/nprogress'

const routes = [
  {
    path: '/',
    redirect: '/test1'
  },
  {
    path: '/main',
    meta: {
      title: '组件测试'
    },
    component: () => import('@/layouts'),
    children: [
      {
        path: '/test1',
        meta: {
          title: '默认'
        },
        component: () => import('@/views/module/test1')
      },
      {
        path: '/test2',
        meta: {
          title: '普通表格'
        },
        component: () => import('@/views/module/表格测试')
      },
      {
        path: '/test22',
        meta: {
          title: 'render表格'
        },
        component: () => import('@/views/module/表格测试/index1')
      },
      {
        path: '/test3',
        meta: {
          title: 'echarts测试'
        },
        component: () => import('@/views/module/echarts测试')
      },
      {
        path: '/overflow',
        meta: {
          title: 'overflow'
        },
        component: () => import('@/views/module/overflow')
      },
      {
        path: '/virlist',
        meta: {
          title: 'virlist'
        },
        component: () => import('@/views/module/虚拟滚动')
      },
      {
        path: '/test4',
        meta: {
          title: '表单测试'
        },
        component: () => import('@/views/module/表单测试')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    component: () => import('@/components/ErrorMessage/404')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.length) {
    // 有值正常跳转
    next()
  } else {
  // 无值跳转404
    next({
      path: '/404'
    })
  }
}
)
router.afterEach(() => {
  NProgress.done()
})

export default router
