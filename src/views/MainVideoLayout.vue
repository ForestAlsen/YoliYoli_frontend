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
            <img :src="`${item.videoCover}`" />
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="carousel-bottom">
        <div class="carousel-video-info">
          <router-link to="" target="_blank" class="video-name">{{
            carouselList[carouselID].videoTitle
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
    <div
      class="recommend-video-list"
      :style="{
        marginRight: getCurrentInstance().proxy.bodyPadding + 'px',
        height: carouselWidth * 0.6 + 'px',
        width: carouselWidth - 20 + 'px',
      }"
    >
      <div v-for="item in recommendVideoList" :key="item">
        <VideoCard :data="item" :layout-type="1"></VideoCard>
      </div>
    </div>
  </div>
  <!--视频列表区域-->
  <div
    class="video-list"
    :style="{
      marginLeft: proxy.bodyPadding + 'px',
      marginRight: proxy.bodyPadding + 'px',
      marginTop: '100px',
    }"
  >
    <VideoList></VideoList>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getCurrentInstance } from 'vue'
import VideoCard from '../components/VideoCard.vue'
import VideoList from '../components/VideoList.vue'
import emitter from '@/eventBus'

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
  if (width < 500) {
    width = 500
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
    videoCover: 'src/assets/image/anon.png',
    UID: 1,
    videoTitle: 'videoTitle',
    userName: 'a',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 2,
    videoTitle: 'videoTitle2',
    userName: 'b',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 3,
    videoTitle: 'videoTitle3',
    userName: 'c',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 4,
    videoTitle: 'videoTitle4',
    userName: 'd',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 5,
    videoTitle: 'videoTitle5',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 6,
    videoTitle: 'videoTitle6',
  },
  {
    videoCover: 'src/assets/image/yamada.png',
    id: 7,
    videoTitle: 'videoTitle7',
  },
  {
    videoCover: 'src/assets/image/ana.png',
    id: 8,
    videoTitle: 'videoTitle8',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 9,
    videoTitle: 'videoTitle9',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    UID: 10,
    videoTitle: 'videoTitle10',
    releaseTime: '2025/3/8',
    userName: '千早爱音',
  },
  {
    videoCover: 'src/assets/image/animate.png',
    id: 11,
    videoTitle: 'videoTitle11',
  },
  {
    videoCover: 'src/assets/image/anon.png',
    id: 12,
    videoTitle: 'videoTitle12',
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

  emitter.on('windowResize', () => {
    setCarouselWidth()
  })
})
onUnmounted(() => {
  emitter.off('windowResize')
})
</script>
<style lang="scss" scoped>
.recommend-block {
  display: flex;
  margin-top: 25px;

  .carousel-block {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .roll-image {
      position: relative;
      background: #e9e9e9;
      text-align: center;
      height: 100%;
      a {
        display: block;
      }
      img {
        max-width: 100%;
        height: 100%;
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
    margin-left: 20px;
    flex: 1;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
