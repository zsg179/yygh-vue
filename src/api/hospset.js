import request from '@/utils/request'

export default {
  getHospSetList(current,limit,searchObject){
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObject
    })
  }
}
