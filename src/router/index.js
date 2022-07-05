import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '@/utils/nprogress'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/test1',
        component: () => import('@/views/module/test1')
      },
      {
        path: '/test2',
        component: () => import('@/views/module/test2')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    component: () => import('@/error/404')
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
