import { getCurrentUser } from '@/api/user'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const LoginUserStore = defineStore('LoginUserStore', () => {
  const LoginUser = ref({
    username: '未登录',
  })
  async function fetchLoginUser() {
    const resp = await getCurrentUser()
    if (resp.data.code === 200 && resp.data.data) {
      LoginUser.value = resp.data.data
    }
  }
  function setLoginUser(newUser) {
    LoginUser.value = newUser
  }
  return { LoginUser, fetchLoginUser, setLoginUser }
})
