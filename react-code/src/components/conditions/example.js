import React, { useState } from 'react'
import { Button } from 'antd'
import { Layout } from '../../shared/layout'
import { Conditions } from './index'

export default () => {
  const [status, setStatus] = useState(true)
  return (
    <Layout
      title="测试react组件条件渲染"
      content={
        <Conditions
          data={{ isLogin: status }}
          yes={<div>我是组件Conditions, 我的状态是Yes</div>}
          no={<div>我是组件Conditions, 我的状态是No</div>}
        />
      }
      actions={
        <Button type="primary" onClick={() => (status ? setStatus(false) : setStatus(true))}>
          点击切换状态
        </Button>
      }
    />
  )
}
