<template>
  <div>
    <DialogComponent
      :show="dialogConfig.show"
      :draggable="dialogConfig.draggable"
      :buttons="dialogConfig.buttons"
      width="1000px"
    >
      <div class="login-body">
        <span class="qr-code-group">
          <div class="qr-code-title">二维码登陆</div>
          <vue-qrcode :value="qrCodeValue" :width="qrCodeSize"></vue-qrcode>
        </span>
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
              <el-input v-model="username" placeholder="请输入用户名" />
            </div>
            <div class="input">
              <el-input v-model="password" placeholder="请输入密码" />
            </div>
            <div class="login-button">
              <el-button type="primary" @click="doLogin">登陆</el-button>
            </div>
          </div>
          <div class="register" v-else>
            <div class="input">
              <el-input v-model="username" placeholder="请输入用户名" />
            </div>
            <div class="input">
              <el-input v-model="password" placeholder="请输入密码" />
            </div>
            <div class="input">
              <el-input v-model="password" placeholder="请确认密码" />
            </div>
            <div class="login-button">
              <el-button type="primary" @click="doRegister">注册</el-button>
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
}
const changeRegister = () => {
  pageStatus.value = false
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
}
</style>
