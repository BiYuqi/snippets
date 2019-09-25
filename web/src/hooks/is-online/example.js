import React from 'react'
import Layout from '@shared/Layout'
import { useIsOnline } from './index'

export const IsOnline = () => {
  const status = useIsOnline()

  return <Layout>你现在的网络状态: {status ? '在线' : '断网'}</Layout>
}
