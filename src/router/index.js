import { createRouter, createWebHistory } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import emitter from '@/eventBus'
import { ElMessage } from 'element-plus'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',

      component: () => import('../layout/MainLayout.vue'),
      children: [
        { path: '/', name: 'home', component: () => import('../views/MainVideoPage.vue') },
        {
          path: '/video/:videoId',
          name: 'video',
          component: () => import('../views/VideoDetailPage.vue'),
        },
      ],
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
    // ElMessage.warning('请先登录')
    // next({ path: '/' })
    emitter.emit('openDialog', () => {
      return true
    })
  }
})

export default router
