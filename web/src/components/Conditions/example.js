import React, { useState } from 'react'
import Layout from '../../shared/Layout'
import { Conditions } from './index'

export default () => {
  const [status, setStatus] = useState(true)
  return (
    <Layout>
      <Conditions
        data={{ isLogin: status }}
        yes={<div>我是组件Conditions, 我的状态是Yes</div>}
        no={<div>我是组件Conditions, 我的状态是No</div>}
      />
      <button onClick={() => (status ? setStatus(false) : setStatus(true))}>点击切换状态</button>
    </Layout>
  )
}
