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
        arrow="never"
        indicator-position="none"
        :height="carouselWidth * 0.6 + 'px'"
        @change="carouselChange"
        ref="carousel"
      >
        <el-carousel-item v-for="item in carouselList" :key="item">
          <div class="roll-image">
            <router-link to="/video/`${item.id}`" target="_blank">
              <img :src="item.videoCover" alt="" />
            </router-link>
          </div>
          <h3 text="2xl" justify="center">{{ item.id }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="carousel-bottom">
        <div class="carousel-video-info">
          <router-link to="" target="_blank" class="video-name">{{
            carouselList[carouselID].videoName
          }}</router-link>
          <div class="switch-button">
            <span class="iconfont icon-zuo" @click="preView"></span>
            <span class="iconfont icon-you" @click="nextView"></span>
          </div>
        </div>

        <div class="dot">
          <div
            :class="['dot-item', carouselID == item - 1 ? 'actived-dot' : '']"
            v-for="item in carouselList.length"
            :key="item"
            @click="resetCarousel(item)"
          ></div>
        </div>
      </div>
    </div>
    <div class="recommend-video-list">
      <div v-for="item in recommendVideoList" :key="item">
        <VideoCard :data="item"></VideoCard>
      </div>
    </div>
  </div>
  <!--视频列表区域-->
  <div class="video-block"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getCurrentInstance } from 'vue'
import VideoCard from './VideoCard.vue'
const { proxy } = getCurrentInstance()
const carousel = ref() //走马灯实例
const carouselWidth = ref()
const carouselID = ref(0) //记录第几张走马灯
const carouselMaxCount = ref(6) //走马灯最大数量
/**
 * 设置走马灯宽度
 */
const setCarouselWidth = () => {
  let width = (document.body.clientWidth - proxy.bodyPadding * 2) * 0.4218
  if (width < 400) {
    width = 400
  }
  carouselWidth.value = width
}
const carouselList = ref([]) //走马灯展示的视频列表
const recommendVideoList = ref([]) //右侧推荐视频列表
/**
 * 返回的所有推荐视频测试数据
 */
const recommendList = ref([
  {
    videoCover: '',
    id: 1,
    videoName: 'videoName',
  },
  {
    videoCover: '',
    id: 2,
    videoName: 'videoName2',
  },
  {
    videoCover: '',
    id: 3,
    videoName: 'videoName3',
  },
  {
    videoCover: '',
    id: 4,
    videoName: 'videoName4',
  },
  {
    videoCover: '',
    id: 5,
    videoName: 'videoName5',
  },
  {
    videoCover: '',
    id: 6,
    videoName: 'videoName6',
  },
  {
    videoCover: '',
    id: 7,
    videoName: 'videoName7',
  },
  {
    videoCover: '',
    id: 8,
    videoName: 'videoName8',
  },
  {
    videoCover: '',
    id: 9,
    videoName: 'videoName9',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 10,
    videoName: 'videoName10',
  },
  {
    videoCover: '',
    id: 11,
    videoName: 'videoName11',
  },
  {
    videoCover: '',
    id: 12,
    videoName: 'videoName12',
  },
])
/**
 * 初始化走马灯和推荐视频列表
 */
if (recommendList.value.length > carouselMaxCount.value) {
  carouselList.value = recommendList.value.slice(0, carouselMaxCount.value)
  recommendVideoList.value = recommendList.value.slice(
    carouselMaxCount.value,
    carouselMaxCount.value + 6,
  )
} else {
  carouselList.value = recommendList.value
}
/**
 *
 * @param index 走马灯切换时的回调
 */
const carouselChange = (index) => {
  carouselID.value = index
}
const resetCarousel = (index) => {
  carouselID.value = index - 1
  carousel.value.setActiveItem(carouselID.value)
}
const preView = () => {
  carousel.value.prev()
}
const nextView = () => {
  carousel.value.next()
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
          margin-right: 20px;
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
      .dot {
        display: flex;
        margin-top: 5px;
        align-content: center;
        .dot-item {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          cursor: pointer;
          background-color: #929090;
          margin-right: 10px;
        }
        .actived-dot {
          width: 13px;
          height: 13px;
          background: #fff;
        }
      }
    }
  }
  .recommend-video-list {
    margin-left: 10px;
    flex: 1;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
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
