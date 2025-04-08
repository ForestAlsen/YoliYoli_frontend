<template>
  <div
    class="image-panel"
    ref="imageRef"
    :style="{
      'border-radius': borderRadius + 'px',
      width: width ? width + 'px' : '100%',
      height: width ? width * scale + 'px' : '100%',
    }"
  >
    <el-image
      v-if="fileImage || fileSource"
      :lazy="lazy"
      :src="fileImage || fileSource"
      :fit="fit"
      @click="showPreviewHandle"
    >
      <template #placeholder>
        <div class="loading"></div>
      </template>
      <template #error>
        <!-- <i class="iconfont icon-image-error"></i> -->
        <img src="../assets/image/goto.png" alt="图片加载失败" />
      </template>
    </el-image>
    <div v-else class="no-img">选择一张图片</div>
    <el-image-viewer
      hide-on-click-modal="true"
      @close="
        () => {
          showPreview = false
        }
      "
      v-if="showPreview"
      :url-list="imageList"
      :teleported="true"
    ></el-image-viewer>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, getCurrentInstance, onMounted } from 'vue'

const { proxy } = getCurrentInstance()
const props = defineProps({
  src: {
    type: [String, File],
  },
  defaultImg: {
    type: String,
    default: '',
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
  },
  fit: {
    type: String,
    default: 'scale-down',
  },
  preview: {
    type: Boolean,
    default: false,
  },
  /**
   * @description: 图片缩放比例
   */
  scale: {
    type: Number,
    default: 0.6,
  },
  borderRadius: {
    type: Number,
    default: 5,
  },
})
const fileImage = ref()
const fileSource = computed(() => {
  if (!props.src && props.defaultImg) {
    return props.defaultImg
  }
  if (props.src instanceof File) {
    const reader = new FileReader()
    //将文件内容转化为base64编码字符串
    reader.readAsDataURL(props.src)
    reader.onload = ({ target }) => {
      fileImage.value = target.result
    }
    return
  } else if (typeof props.src === 'string') {
    return props.src
  }
  return {}
})
const imageList = computed(() => {
  if (!props.preview) {
    return []
  }
  const previewImgName = props.src.replace(proxy.imgSuffixName, '')
  return [previewImgName]
})
const showPreview = ref(false)
const showPreviewHandle = () => {
  if (props.preview) {
    return
  }
  showPreview.value = true
}
const imageRef = ref()
const loadingHeight = ref()
onMounted(() => {
  loadingHeight.value = imageRef.value.cilentWidth * props.scale
})
</script>

<style lang="scss">
.image-panel {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  :deep(.el-image) {
    width: 100%;
    height: 100%;
  }
  :deep(.is-loading) {
    display: none;
  }
  :deep(.el-image_wrapper) {
    position: relative;
    vertical-align: top;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .icon-image-error {
    margin: 0px auto;
    font-size: 20px;
    color: #838383;
    height: 100%;
  }
  .loading {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .no-img {
    text-align: center;
    color: #9f9f9f;
  }
}
</style>
