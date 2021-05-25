import request from '@/utils/request'

export default {
  getHospSetList(current, limit, searchObject) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObject
    })
  },
  deleteHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  batchRemoveHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  //锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置
  saveHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  getHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'put',
      data: hospitalSet
    })
  }

}