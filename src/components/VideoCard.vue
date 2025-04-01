<template>
  <div
    :class="['video-item', layoutType == 2 ? 'video-item2' : '']"
    :style="{ 'margin-top': marginTop + 'px' }"
  >
    <router-link to="`/video/${data.videoID}`" target="_blank">
      <div class="cover">
        <CoverComponent :src="data.videoCover" preview="false"></CoverComponent>

        <div class="shade">
          <div class="played-count" v-show="layoutType === 1">
            <div class="iconfont icon-bofangcishu">&nbsp;{{ data.playedCount }}</div>
            <div class="iconfont icon-danmushu">&nbsp;{{ data.danmu }}</div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="video-info">
      <router-link
        class="video-title"
        target="_blank"
        to="`/video/${data.videoID}`"
        v-html="data.videoTitle"
      ></router-link>
      <router-link class="user-name" to="`/user/${data.UID}`" target="_blank"
        ><span class="iconfont icon-upzhu" :style="{ float: 'left' }">{{ data.userName }} </span>
        <span :style="{ float: 'right' }">{{ data.releaseTime }}</span>
      </router-link>
      <div class="played-count" v-show="layoutType === 2">
        <div class="iconfont icon-bofangcishu">&nbsp;{{ data.playedCount }}</div>
        <div class="iconfont icon-danmushu">&nbsp;{{ data.danmu }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  /**
   * @description: 布局类型 1:上下布局 2:左右布局
   */
  layoutType: {
    type: Number,
    default: 1,
  },
  marginTop: {
    type: Number,
    default: 0,
  },
})
</script>

<style lang="scss" scoped>
.video-item {
  width: 100%;
  overflow: hidden;
  .cover {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .image-style {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 5px;
    }
    .shade {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      padding: 8px 8px 6px;
      width: 100%;
      height: 38px;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
      color: #fff;
      opacity: 1;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .played-count {
        display: flex;
        font-style: oblique;
        iconfont {
          font-size: 13px;
          &::before {
            font-size: 16px;
            margin-right: 2px;
          }
        }
        .icon-bofangcishu {
          font-size: 14px;
        }
        .icon-danmushu {
          margin-left: 15px;
          font-size: 14px;
        }
      }
    }
  }

  .video-info {
    cursor: pointer;
    .video-title {
      height: 40px;
      color: rgb(1, 11, 18);
      font-size: 14px;
      margin-top: 10px;
      display: -webkit-box; //兼容旧浏览器
      overflow: hidden;
      text-decoration: none;
      -webkit-box-orient: vertical;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      word-break: break-word !important;
      word-break: break-all;
      line-break: anywhere;
      line-clamp: 2;
      &:hover {
        color: blueviolet;
        transition: color 0.3s linear;
      }
      :deep(.highlight) {
        color: red !important;
      }
    }
    .user-name {
      margin-top: 5px;
      color: #9499a0;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: blueviolet;
        transition: color 0.3s linear;
      }
      .iconfont {
        &::before {
          font-size: 18px;
          margin-right: 3px;
          float: left;
        }
        font-size: 13px;
      }
    }
  }
}

.video-item2 {
  display: flex;
  .cover {
    width: 190px;
    .shade {
      justify-content: end;
    }
  }
  .video-info {
    flex: 1;
    margin-left: 15px;
    .videoTitle {
      margin-top: 0px;
    }
    .played-count {
      display: flex;
      width: 100%;
      margin-top: 5px;
      color: #9499a0;
      .iconfont {
        font-size: 14px;
        &::before {
          font-size: 16px;
          margin-right: 2px;
        }
      }
      .icon-danmu {
        margin-left: 15px;
      }
    }
  }
}
</style>
