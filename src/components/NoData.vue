<template>
  <div class="no-data">
    <!-- <img src="" alt="No Data" />
    <p>暂无数据</p> -->
    <el-empty
      description="暂无数据"
      image="https://img.icons8.com/ios-filled/50/9499a0/no-data.png"
      image-size="100px"
    ></el-empty>
  </div>
</template>

<script>
export default {}
</script>

<style>
.no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #9499a0;
}
</style>
