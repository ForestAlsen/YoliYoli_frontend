<template>
  <div class="video-detail-page"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useShowComponentStore } from '@/stores/useShowComponentStore'
onMounted(() => {
  nextTick(() => {
    useShowComponentStore().setShowScrollHeader(false)
    useShowComponentStore().setShowFixedHeader(true)
  })
})
onUnmounted(() => {
  nextTick(() => {
    useShowComponentStore().setShowScrollHeader(true)
    useShowComponentStore().setShowFixedHeader(false)
  })
})
</script>

<style lang="scss" scoped></style>
