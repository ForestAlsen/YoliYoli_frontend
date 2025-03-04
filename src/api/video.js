import myAxios from '@/request'
//获取视频封面
export const getVideoCover = async (videoID) => {
  return await myAxios.request({
    url: '',
    method: 'post',
    params: {
      videoID,
    },
  })
}
