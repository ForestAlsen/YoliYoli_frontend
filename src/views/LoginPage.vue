<template>
  <div>
    <DialogComponent
      :show="dialogConfig.show"
      :draggable="dialogConfig.draggable"
      :buttons="dialogConfig.buttons"
      width="1000px"
    >
      <div class="login-body">
        <!-- <span class="qr-code-group">
          <div class="qr-code-title">二维码登陆</div>
          <vue-qrcode :value="qrCodeValue" :width="qrCodeSize"></vue-qrcode>
        </span> -->
        <div class="bg-img"><img src="../assets/image/mizuki1.jpg" alt="" /></div>
        <span class="input-group">
          <div class="login-title">
            <el-button text @click="changeLogin">登陆</el-button> |<el-button
              text
              @click="changeRegister"
              >注册</el-button
            >
          </div>
          <div class="login" v-if="pageStatus">
            <div class="input">
              <el-input v-model="username" placeholder="请输入用户名" clearable />
            </div>
            <div class="input">
              <el-input v-model="password" show-password placeholder="请输入密码" clearable />
            </div>
            <div class="login-button">
              <el-button
                type="primary"
                color="#d3b1b1"
                style="color: #fff; font-size: 15px; font-weight: normal"
                @click="doLogin"
                >登陆</el-button
              >
            </div>
          </div>
          <div class="register" v-else>
            <div class="input">
              <el-input v-model="username" placeholder="请输入用户名" clearable />
            </div>
            <div class="input">
              <el-input v-model="password" show-password placeholder="请输入密码" clearable />
            </div>
            <div class="input">
              <el-input
                v-model="confirmPassword"
                show-password
                placeholder="请确认密码"
                clearable
              />
            </div>
            <div class="login-button">
              <el-button
                type="primary"
                color="#fb7299"
                style="color: #fff; font-size: 15px; font-weight: normal"
                @click="doRegister"
                >注册</el-button
              >
            </div>
          </div>
        </span>
      </div>
    </DialogComponent>
  </div>
</template>

<script setup>
import emitter from '@/eventBus'
import { ref } from 'vue'
/**
 * @description: 监听打开登陆窗口事件
 */
emitter.on('openDialog', (callback) => {
  dialogConfig.value.show = callback
})
emitter.on('closeDialog', (callback) => {
  dialogConfig.value.show = callback
})
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const qrCodeValue = ref('https://example.com')
const qrCodeSize = ref(200)
const pageStatus = ref(true)
const dialogConfig = ref({
  show: false,
  draggable: true,
  top: 100,
  width: 400,
})
const doLogin = () => {
  /**
   * todo 登陆逻辑
   */
}
const doRegister = () => {
  /**
   * todo 注册逻辑
   */
}
const changeLogin = () => {
  pageStatus.value = true
  username.value = ''
  password.value = ''
  confirmPassword.value = ''
}
const changeRegister = () => {
  pageStatus.value = false
  username.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>

<style lang="scss">
.login-body {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  .bg-img {
    overflow: hidden;
    width: 450px;
    height: 500px;
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .input-group {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .login-button {
      margin-top: 15px;
    }
    .input {
      width: 300px;
      margin: 15px;
    }
  }
  .qr-code-group {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 25%;
  }
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .login-button {
    display: flex;
    justify-content: center;

    align-items: center;
    color: #6c6a6a;
  }
}
</style>
