<template>
  <div
    :class="[layoutType == 'grid' ? 'data-list-grid' : '']"
    :style="{ 'grid-template-columns': `repeat(${gridCount}, 1fr)` }"
  >
    <template v-for="item in data.list" :key="item.id">
      <slot :data1="item"></slot>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
</style>
