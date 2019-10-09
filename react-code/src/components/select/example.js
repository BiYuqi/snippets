import React, { useState } from 'react'
import { Layout } from '../../shared/layout'
import { Select } from './index'
import { Divider } from 'antd'

const choices = [['banana', 'Banana'], ['apple', 'Apple'], ['orange', 'Orange']]
const defaultValue = 'apple'

export const SelectExample = () => {
  const [value, setValue] = useState(defaultValue)
  return (
    <Layout
      title="选择下拉框"
      content={
        <Select
          options={choices}
          defaultValue={defaultValue}
          onChange={data => {
            setValue(data)
          }}
        />
      }
      actions={<div>Select value: {value}</div>}
    />
  )
}
