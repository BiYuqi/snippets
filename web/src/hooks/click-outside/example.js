import React, { useRef } from 'react'
import Layout from '../../shared/Layout'
import { useClickOutside } from './index'

export const ClickBox = ({ onClickOutside }) => {
  const clickRef = useRef()
  useClickOutside(clickRef, onClickOutside)

  return (
    <Layout>
      <div>点击按钮以外的地方，都会触发事件，在控制台打印log</div>
      <button ref={clickRef}>点击我吧</button>
    </Layout>
  )
}
