import { createRouter, createWebHistory } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { ElMessage } from 'element-plus'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BasicLayout.vue'),
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/VideoDetailPage.vue'),
    },
  ],
})
router.beforeEach((to, from, next) => {
  const loginUserStore = useLoginUserStore()
  if (
    loginUserStore.LoginUser.username !== '未登录' ||
    to.path === '/' ||
    to.path.includes('video')
  ) {
    next()
  } else {
    ElMessage.warning('请先登录')
    next({ path: '/' })
  }
})

export default router
