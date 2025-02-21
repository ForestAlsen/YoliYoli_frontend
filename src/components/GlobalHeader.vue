<template>
  <div :class="['base-header-bar', 'base-header-bar-' + theme]">
    <div class="menu">
      <router-link class="iconfont icon-bilibili" to="/">首页</router-link>
    </div>
    <div class="search">
      <el-input v-model="search_input" placeholder="Type something" />
    </div>
    <div class="user-bar">
      <div class="user-bar-item">
        <div class="avatar"><el-avatar :size="37" :src="circleUrl" /></div>
      </div>
      <div class="user-bar-item">
        <div class="iconfont icon-xiaoxi1"></div>
        <div>消息</div>
      </div>
      <div class="user-bar-item">
        <div class="iconfont icon-shoucang"></div>
        <div>收藏</div>
      </div>
      <div class="user-bar-item">
        <div class="iconfont icon-lishi"></div>
        <div>历史</div>
      </div>
      <div class="btn-upload">
        <el-button type="primary" size="" @click=""
          ><span class="iconfont icon-share"></span><span>投稿</span></el-button
        >
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
const { proxy } = getCurrentInstance()
const search_input = ref('')
defineProps({
  theme: {
    type: String,
    default: 'light',
  },
})
</script>

<style lang="scss" scoped>
.base-header-bar {
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  padding: 0px 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .iconfont {
    &::before {
      margin-right: 5px;
    }
    text-decoration: none;
  }
}
.user-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.user-bar-item {
  padding: 5px 15px;
  // margin: 0 10px;
  text-align: center;
  cursor: pointer;
  .iconfont {
    font-size: 20px;
    text-align: center;
    font-weight: normal;
  }
}
.btn-upload {
  margin-left: 10px;
  .el-button {
    background-color: #fb7299;
    border-color: #fb7299;
    border-radius: 8px;
  }
  .iconfont {
    font-size: 20px;
    text-align: center;
    font-weight: normal;
    &::before {
      margin-right: 5px;
    }
  }
}
.base-header-bar-light {
  color: #fff;
  .menu {
    a {
      color: #fff;
    }
  }
}
.base-header-bar-dark {
  color: #4d4949;
  .menu {
    a {
      color: #4d4949;
    }
  }
}
</style>
