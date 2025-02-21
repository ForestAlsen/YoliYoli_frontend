<template>
  <div class="main-layout">
    <div
      class="carousel-block"
      :style="{ height: carouselWidth * 0.6 + 'px', width: carouselWidth + 'px' }"
    >
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="video-block"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
const carouselWidth = ref()
const setCarouselWidth = () => {
  let width = document.body.clientWidth - getCurrentInstance().proxy.bodyPadding * 0.4218
  if (width < 400) {
    width = 400
  }
  carouselWidth.value = width
}
</script>
<style lang="scss">
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
