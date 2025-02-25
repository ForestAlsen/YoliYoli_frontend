<template>
  <!--推荐视频区域-->
  <div class="recommend-block">
    <div
      class="carousel-block"
      :style="{
        height: carouselWidth * 0.6 + 'px',
        width: carouselWidth - 20 + 'px',
        marginLeft: getCurrentInstance().proxy.bodyPadding + 'px',
      }"
    >
      <el-carousel
        indicator-position="outside"
        :height="carouselWidth * 0.6 + 'px'"
        @change="carouselChange"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="carousel-bottom">
        <div class="carousel-video-info">
          <router-link to="" target="_blank" class="video-name">{{ carouselID }}</router-link>
        </div>
        <div class="switch-button">
          <span class="iconfont icon-zuo" @click="carouselChange(carouselID - 1)"></span>
          <span class="iconfont icon-you" @click="carouselChange(carouselID + 1)"></span>
        </div>
      </div>
    </div>
  </div>
  <!--视频列表区域-->
  <div class="video-block"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getCurrentInstance } from 'vue'
const carouselWidth = ref()
const carouselID = ref(0) //记录第几张走马灯
/**
 * 设置走马灯宽度
 */
const setCarouselWidth = () => {
  let width = (document.body.clientWidth - getCurrentInstance().proxy.bodyPadding * 2) * 0.4218
  if (width < 400) {
    width = 400
  }
  carouselWidth.value = width
}
/**
 * 推荐视频列表测试数据
 */
const recommendList = ref([
  {
    url: '',
    id: 1,
    title: 'title',
  },
  {
    url: '',
    id: 2,
    title: 'title2',
  },
  {
    url: '',
    id: 3,
    title: 'title3',
  },
  {
    url: '',
    id: 4,
    title: 'title4',
  },
  {
    url: '',
    id: 5,
    title: 'title5',
  },
  {
    url: '',
    id: 6,
    title: 'title6',
  },
])
/**
 *
 * @param index 走马灯改变事件
 */
const carouselChange = (index) => {
  carouselID.value = index
}
/**
 * 让推荐视频列表的走马灯在挂载时调用自适应宽度的方法
 */
onMounted(() => {
  setCarouselWidth()
  window.addEventListener('resize', setCarouselWidth)
})
</script>
<style lang="scss">
.recommend-block {
  display: flex;
  margin-top: 20px;
  .carousel-block {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .el-carousel {
      width: 100%;
      height: 100%;
      .el-carousel__item {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #99a9bf;
        color: #475669;
        font-size: 30px;
      }
    }
    .carousel-bottom {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 65px;
      background: rgba(0, 0, 0, 0.6);
      padding: 10px;
      .carousel-video-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .video-name {
          flex: 1;
          color: #fff;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        .switch-button {
          margin-left: 10px;
          width: 60px;
          display: flex;
          justify-content: space-between;
          .iconfont {
            cursor: pointer;
            text-align: center;
            width: 25px;
            line-height: 25px;
            font-size: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            color: #fff;
          }
        }
      }
    }
  }
}

// .recommend-block {
//   position: relative;
//   display: flex;

//   justify-content: center;
//   width: 100%;
// }
// .recommend-video-list {
// }
</style>
