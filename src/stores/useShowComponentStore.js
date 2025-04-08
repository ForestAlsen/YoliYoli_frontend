import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShowComponentStore = defineStore('showComponent', () => {
  const showFixedHeader = ref(true)
  const showScrollHeader = ref(true)
  function setShowFixedHeader(value) {
    showFixedHeader.value = value
  }
  function setShowScrollHeader(value) {
    showScrollHeader.value = value
  }
  return { showFixedHeader, showScrollHeader, setShowFixedHeader, setShowScrollHeader }
})
