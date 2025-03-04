<template>
  <div
    :class="['video-item', layout == 2 ? 'video-item2' : '']"
    :style="{ 'margin-top': marginTop + 'px' }"
  >
    <router-link to="`/video/${data.videoID}`" target="_blank">
      <div class="cover">
        <CoverComponent :src="data.videoCover"></CoverComponent>
        <div class="shade" v-show="">
          <div class="played-count"></div>
        </div>
      </div>
    </router-link>
    {{ data.videoName }}
  </div>
  <div>{{ data.userName }}</div>
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
      iconfont {
        font-size: 13px;
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
  .video-info {
    cursor: pointer;
    .title {
      height: 40px;
      color: var(--text-color);
      font-size: 14px;
      margin-top: 10xp;
      display: -webkit-box; //兼容旧浏览器
      overflow: hidden;
      text-decoration: none;
      -webkit-box-orient: vertical;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      word-break: break-word !important;
      word-break: break-all;
      line-break: anywhere;
      -webkit-line-clamp: 2;
      &:hover {
        color: var(--bule);
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
        color: var(--bule);
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
    .title {
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
