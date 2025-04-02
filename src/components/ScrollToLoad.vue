<template>
  <div
    :class="[layoutType == 'grid' ? 'data-list-grid' : '']"
    :style="{ 'grid-template-columns': `repeat(${gridCount}, 1fr)` }"
  >
    <template v-for="item in data.list" :key="item.id">
      <slot :data1="item"></slot>
    </template>
  </div>
  <div class="bottom-loading" v-if="isLoading"><img src="" alt="" />加载中...</div>
  <div
    class="reach-bottom-msg"
    v-if="data.pageNumber >= data.totalPage && !isLoading && data.list.length > 0"
  >
    {{ loadEndMsg }}
  </div>
  <no-data class="no-data" v-if="!data.list && !isLoading"></no-data>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NoData from './NoData.vue'
import emitter from '@/eventBus'
const props = defineProps({
  data: {
    type: Object,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  loadEndMsg: {
    type: String,
    default: '没有更多了喵~~',
  },
  layoutType: {
    type: String,
    default: 'grid',
  },
  gridCount: {
    type: Number,
    default: 5,
  },
})
const uplatedData = ref(props.data)
const emit = defineEmits(['loadData'])
/**
 * 触发滚动加载事件
 */
onMounted(() => {
  emitter.on('scroll', (scrollTop) => {
    //判断滚动条是否到达底部
    if (scrollTop + document.documentElement.clientHeight < document.body.offsetHeight) {
      return
    }
    //判断数据是否已经加载或者正在加载
    if (props.isLoading || props.data.pageNumber >= props.data.totalPage) {
      return
    }
    uplatedData.value = props.data
    uplatedData.value.pageNumber++
    emit('loadData')
  })
})
onUnmounted(() => {
  emitter.off('scroll')
})
</script>

<style lang="scss" scoped>
.data-list-grid {
  display: grid;
  gap: 20px;
  padding-bottom: 10px;
}
.reach-bottom-msg {
  text-align: center;
  line-height: 40px;
  color: #9499a0;
}
.bottom-loading {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9499a0;
  img {
    width: 20px;
    margin-right: 10px;
  }
}
.no-data {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
