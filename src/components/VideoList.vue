<template>
  <div>
    <ScrollToLoad
      :data="dataSource"
      :isLoading="loading"
      @loadData="loadDataList"
      :layoutType="grid"
    >
      <template #default="{ data1 }">
        <video-card :data="data1"></video-card>
      </template>
    </ScrollToLoad>
  </div>
</template>

<script setup>
import myAxios from '@/request'
import VideoCard from './VideoCard.vue'
import ScrollToLoad from './ScrollToLoad.vue'
import { ref } from 'vue'
const dataSource = ref({}) //用于回调给组件的数据
const loading = ref(false)
/**
 * 滚动加载数据
 */
// const loadDataList = async () => {
//   loading.value = true
//   let response = await myAxios({
//     url: '',
//     params: {},
//   })
//   loading.value = false
//   if (!response) {
//     return
//   }
//   const dataList = response.data.list
//   dataSource.value = response.data
//   if (dataSource.value.pageNumber > 1) {
//     dataSource.value.list = dataList.concat(response.data.list)
//   }
// }
/**
 * 模拟后端返回的视频数据
 */
const loadDataList = () => {
  console.log(
    '加载了',
    dataSource.value.pageNumber,
    '条数据,共有',
    dataSource.value.totalPage,
    '条数据',
  )
}
const response = ref({
  code: 200,
  data: {
    pageNumber: 1,
    totalPage: 10,
    list: [
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 1,
        videoTitle: 'videoTitle',
        userName: 'a',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 2,
        videoTitle: 'videoTitle2',
        userName: 'b',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 3,
        videoTitle: 'videoTitle3',
        userName: 'c',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 4,
        videoTitle: 'videoTitle4',
        userName: 'd',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 5,
        videoTitle: 'videoTitle5',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 6,
        videoTitle: 'videoTitle6',
      },
      {
        videoCover: 'src/assets/image/yamada.png',
        videoIDd: 7,
        videoTitle: 'videoTitle7',
      },
      {
        videoCover: 'src/assets/image/ana.png',
        videoID: 8,
        videoTitle: 'videoTitle8',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 9,
        videoTitle: 'videoTitle9',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 10,
        videoTitle: 'videoTitle10',
        releaseTime: '3-8',
        userName: '千早爱音',
        playedCount: '1.5万',
        danmu: '2003',
      },
      {
        videoCover: 'src/assets/image/animate.png',
        videoID: 11,
        videoTitle: 'videoTitle11',
      },
      {
        videoCover: 'src/assets/image/anon.png',
        videoID: 12,
        videoTitle: 'videoTitle12',
      },
    ],
  },
})
dataSource.value = response.value.data
</script>

<style lang="scss"></style>
