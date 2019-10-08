import React from 'react'
import { Layout } from '../../shared/layout'
import { LimitedTextarea } from './index'

export const LimitedTextareaExample = () => {
  return (
    <Layout
      title="限制字符输入"
      content={<LimitedTextarea rows={5} limit={100} value="Please input your suggestions!" />}
    />
  )
}
