import React, { useRef } from 'react'
import { Button, message } from 'antd'
import { Layout } from '@shared/layout'
import { useClickOutside } from './index'

export const ClickBox = ({ onClickOutside }) => {
  const clickRef = useRef()
  useClickOutside(clickRef, onClickOutside)

  return (
    <Layout
      title="实现click outside功能"
      content={<p>点击按钮以外的地方，都会触发事件，在控制台打印log</p>}
      actions={
        <span ref={clickRef}>
          <Button type="primary" onClick={() => message.success('哈哈，点击我没用的')}>
            点击我吧
          </Button>
        </span>
      }
    />
  )
}
