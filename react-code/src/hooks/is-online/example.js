import React from 'react'
import { Layout } from '../../shared/layout'
import { useIsOnline } from './index'

export const IsOnline = () => {
  const status = useIsOnline()

  return (
    <Layout title="实时检测网络是否联网" content={<p>网络状态: {status ? '在线' : '断网'}</p>} />
  )
}
