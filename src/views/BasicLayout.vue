<template>
  <div
    class="main-contain"
    :style="{
      'max-width': MaxWidth + 'px',
      'min-width': MinWidth + 'px',
    }"
  >
    <div class="scroll-header" style="z-index: 1001"><GlobalHeader /></div>
    <div class="fix-header" v-show="showFixHeader" style="z-index: 1001">
      <GlobalHeader theme="dark"></GlobalHeader>
    </div>
    <LoginPage></LoginPage>
    <div class="video-page">
      <div class="video-page"><VideoLayoutPage></VideoLayoutPage></div>
    </div>
  </div>
</template>

<script setup>
import VideoLayoutPage from '@/views/MainVideoLayout.vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import LoginPage from '@/views/LoginPage.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import emitter from '@/eventBus'
// import { getCurrentInstance } from 'vue'
// const { proxy } = getCurrentInstance()
const MaxWidth = ref(2000)
const MinWidth = ref(1250)
/**
 * @description: 监听滚动事件
 */

const showFixHeader = ref(false)
/**
 * @description: 滚动事件
 */
const scrollEvent = () => {
  // 获取滚动高度
  var scrollTop = window.scrollY
  if (scrollTop > 20) {
    showFixHeader.value = true
  } else {
    showFixHeader.value = false
  }
  emitter.emit('scroll', scrollTop)
}
const resizeEvent = () => {
  emitter.emit('windowResize')
}
onMounted(() => {
  window.addEventListener('scroll', scrollEvent)
  window.addEventListener('windowResize', resizeEvent)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent)
  window.removeEventListener('windowResize', resizeEvent)
})
</script>
<style>
body {
  background-color: #ebebeb;
  padding: 0px;
  margin: 0px;
}
</style>

<style lang="scss">
.main-contain {
  margin: 0 auto;
  background-color: #fff;
  min-height: calc(100vh);
}
.scroll-header {
  position: relative;
  margin: 0px auto;
  height: 180px;
  width: 100%;
  background-position: center;
  background-image: url(@/assets/image/anon.png);
  background-repeat: no-repeat;
  background-color: rgb(176, 165, 165);
}
.fix-header {
  position: fixed;
  height: 64px;
  width: 100%;
  top: 0;
  background-color: #fff;
  box-shadow: #cac1c1 0px 0px 4px;
}
</style>
