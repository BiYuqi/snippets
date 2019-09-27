import React from 'react'

export const Conditions = props => {
  const { data, yes, no } = props
  // 假设data可以判断用户相关信息
  const { isLogin } = data

  return isLogin ? yes : no || null
}
