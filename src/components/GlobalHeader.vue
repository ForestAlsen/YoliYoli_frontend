<template>
  <div :class="['base-header-bar', 'base-header-bar-' + theme]">
    <div class="menu">
      <router-link class="iconfont icon-bilibili" to="/">首页</router-link>
    </div>
    <div class="search">
      <div class="search-pannel">
        <input v-model="search_input" placeholder="请输入要搜索的内容" />
        <i v-if="search_input" class="iconfont icon-guanbi" @click="search_input = ''" />
        <button class="iconfont icon-sousuo" @click="onSearch" />
      </div>
    </div>
    <div class="user-bar">
      <div class="user-bar-item">
        <div class="avatar">
          <!-- <el-button type="primary" :icon="LoginIcon" @click="openLoginWindow" /> -->
          <el-button type="primary" @click="openLoginWindow" color="#fb7299"
            ><span style="color: #fff">登陆</span></el-button
          >
        </div>
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
        <el-button type="primary" size=""
          ><span class="iconfont icon-share"></span><span>投稿</span></el-button
        >
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import emitter from '@/eventBus'
import { ref, onMounted, h } from 'vue'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const search_input = ref('')
/**
 * @description:发送打开登陆窗口事件
 */
const openLoginWindow = () => {
  emitter.emit('openDialog', () => {
    return true
  })
}
const onSearch = () => {
  console.log(search_input.value)
}
//const LoginIcon = h('i', { class: 'iconfont icon-bilibili-' })
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
  position: relative;
  margin: 0px auto;
  width: 90%;
  .search-pannel {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 0px 10px;
    border: 1px solid #f5f5f5;
    overflow: hidden;
    input {
      border: none;
      background-color: #f5f5f5;
      width: 100%;
      height: 30px;
      border-radius: 8px;
      padding: 0px 10px;
      &:focus {
        outline: none;
      }
    }
    .iconfont {
      margin-left: 8px;
      border: none;
      background-color: #f5f5f5;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      padding: 0px 10px;
      cursor: pointer;
      font-size: 20px;
      text-align: center;
      font-weight: normal;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #d3cfcf;
        transition: background-color 0.3s ease;
      }
    }
  }
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
  :hover {
    background-color: #e999af;
    border-color: #e999af;
    transition: all 0.3s ease;
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
