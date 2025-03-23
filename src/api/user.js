import myAxios from '@/request'

export const getCurrentUser = async () => {
  return await myAxios.request({
    url: '/user/get_current',
    method: 'get',
  })
}
