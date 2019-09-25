import React, { useState } from 'react'
import { Button } from 'antd'
import { Layout, InnerContent } from '@shared/layout'
import { Conditions } from './index'

export default () => {
  const [status, setStatus] = useState(true)
  return (
    <Layout>
      <InnerContent>
        <Conditions
          data={{ isLogin: status }}
          yes={<div>我是组件Conditions, 我的状态是Yes</div>}
          no={<div>我是组件Conditions, 我的状态是No</div>}
        />
      </InnerContent>
      <Button onClick={() => (status ? setStatus(false) : setStatus(true))}>点击切换状态</Button>
    </Layout>
  )
}
