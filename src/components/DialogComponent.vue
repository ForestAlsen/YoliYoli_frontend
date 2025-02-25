<template>
  <div class="dialog-component">
    <el-dialog
      :show-close="showClose"
      :title="title"
      :model-value="show"
      :before-close="handleClose"
      :draggable="true"
      :close-on-click-modal="false"
      :top="top + 'px'"
      :width="width"
      body-class="class-body"
      header-class="class-header"
      footer-class="class-footer"
    >
      <!--用插槽自定义头部-->
      <template #header="{ title, close }">
        <div v-if="title" class="title">{{ title }}</div>
        <slot v-else name="header"></slot>
      </template>
      <div class="dialog-body" :style="{ 'max-Height': maxHeight + 'px', padding: padding }">
        <slot></slot>
      </div>
      <template v-if="buttons && buttons.length > 0"
        ><div class="footer">
          <el-button link v-if="showClose" @click="close"></el-button>
          <el-button
            v-for="button in buttons"
            type="button.type||primary"
            :key="button.text"
            @click="button.click"
          >
            {{ button.text }}</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
/**
 * 定义封装后的Dialog组件参数
 */
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  show: {
    type: Boolean,
    default: false,
  },
  draggable: {
    type: Boolean,
    default: true,
  },
  top: {
    type: Number,
    default: 80,
  },
  width: {
    type: String,
    default: '30%',
  },
  bodyClass: {
    type: String,
    default: '',
  },
  headerClass: {
    type: String,
    default: '',
  },
  footerClass: {
    type: String,
    default: '',
  },
  padding: {
    type: String,
    default: '15px',
  },
  buttons: {
    type: Array,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
})
const maxHeight = window.innerHeight - props.top - 100
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* text-align: right; */
  padding: 10px 20px;
  border-top: 1px solid #a8aaaf;
}
.title {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}
.dialog-body {
  overflow: auto;
}
</style>
