import React, { useRef } from 'react'
import { Button } from 'antd'
import { Layout, InnerContent } from '@shared/layout'
import { useClickOutside } from './index'

export const ClickBox = ({ onClickOutside }) => {
  const clickRef = useRef()
  useClickOutside(clickRef, onClickOutside)

  return (
    <Layout>
      <InnerContent>
        <p>点击按钮以外的地方，都会触发事件，在控制台打印log</p>
      </InnerContent>
      <Button ref={clickRef}>点击我吧</Button>
    </Layout>
  )
}
