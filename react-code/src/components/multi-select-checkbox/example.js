import React from 'react'
import { Layout } from '../../shared/layout'
import { MultiselectCheckbox } from './index'

const options = [{ label: 'Item One', checked: true }, { label: 'Item Two', checked: false }]

export const MultiselectCheckboxExample = () => {
  return (
    <Layout
      title="多项选择"
      content={
        <MultiselectCheckbox
          options={options}
          onChange={data => {
            console.log(data)
          }}
        />
      }
    />
  )
}
