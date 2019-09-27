import React, { useEffect, useState } from 'react'
import { Button, message } from 'antd'
import { Layout } from '../../shared/layout'
import { ControlledInput } from './index'

export const ControlledInputExample = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(value)
  }, [value])

  const handleButtonClick = () => {
    message.success(`Current value is: ${value}`)
  }

  return (
    <Layout
      title="定制化input"
      content={
        <ControlledInput
          type="text"
          placeholder="Please input..."
          onChange={val => setValue(val)}
        />
      }
      actions={
        <Button type="primary" onClick={handleButtonClick}>
          点击查看
        </Button>
      }
    />
  )
}
