<template>
  <div>
    <router-link v-if="UID" to="`/user/${UID}`" target="_blank">
      <CoverComponentomponent
        :width="width"
        :lazy="lazy"
        :borderRadius="borderRadius + '%'"
        :src="avatar"
        :defaultImg="defaultAvatar"
        :scale="scale"
      ></CoverComponentomponent
    ></router-link>
    <div v-else><CoverComponent></CoverComponent></div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const defaultAvatar = ref('')
const props = defineProps({
  with: {
    type: Number,
    default: 50,
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  scale: {
    type: Number,
    default: 0.6,
  },
  UID: {
    type: Number,
  },
  avatar: {
    type: String,
  },
  borderRadius: {
    type: Number,
    default: 50,
  },
})
</script>

<style></style>
