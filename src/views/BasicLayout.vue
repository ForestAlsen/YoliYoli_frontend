<template>
  <div
    class="main-contain"
    :style="{
      'max-width': MaxWidth + 'px',
      'min-width': MinWidth + 'px',
    }"
  >
    <div class="scroll-header" style="z-index: 1001"><GlobalHeader /></div>
    <div class="fix-header" v-if="showFixHeader" style="z-index: 1001">
      <GlobalHeader theme="dark"></GlobalHeader>
    </div>
    <LoginPage></LoginPage>
    <div class="video-page"><VideoPage></VideoPage></div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script setup>
import VideoPage from '@/components/VideoPage.vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import LoginPage from '@/views/LoginPage.vue'
import { ref, onMounted } from 'vue'
// import { getCurrentInstance } from 'vue'
// const { proxy } = getCurrentInstance()
const MaxWidth = ref(2000)
const MinWidth = ref(1250)
/**
 * @description: 监听滚动事件
 */
onMounted(() => {
  window.addEventListener('scroll', scrollEvent)
})
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
}
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
