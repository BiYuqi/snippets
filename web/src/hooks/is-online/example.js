import React from 'react'
import { Layout, InnerContent } from '@shared/layout'
import { useIsOnline } from './index'

export const IsOnline = () => {
  const status = useIsOnline()

  return (
    <Layout>
      <InnerContent>你现在的网络状态: {status ? '在线' : '断网'}</InnerContent>
    </Layout>
  )
}
