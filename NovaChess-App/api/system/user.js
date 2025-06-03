import upload from '@/utils/upload'
import request from '@/utils/request'

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    data: data
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/system/user/profile',
    method: 'get'
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/system/user/profile',
    method: 'put',
    data: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return upload({
    url: '/system/user/profile/avatar',
    name: data.name,
    filePath: data.filePath
  })
}

// 获取用户信息(vue3用户设置专用)
export function getUserData() {
  return request({
    url: '/sys/user/login/setting/getUserData',
    method: 'get'
  })
}

// 用户注册
export function register(data) {
  return request({
    url: '/sys/user/register',
    method: 'post',
    params: data
  })
}

// 用户编辑(vue3用户设置专用)
export function userEdit(data) {
  return request({
    url: '/sys/user/login/setting/userEdit',
    method: 'post',
    data: data
  })
}

// 获取用户列表
export function getUserList(params) {
  return request({
    url: '/sys/user/list',
    method: 'get',
    params: params
  })
}
