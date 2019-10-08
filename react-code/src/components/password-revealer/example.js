import React from 'react'
import { Layout } from '../../shared/layout'
import { PasswordRevealer } from './index'

export const PasswordRevealerExample = () => {
  return (
    <Layout
      title="密码框"
      content={
        <PasswordRevealer
          placeholder="Please input your password."
          onChange={data => {
            console.log(data.target.value)
          }}
        />
      }
    />
  )
}
