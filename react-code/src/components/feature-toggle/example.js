import React, { Fragment } from 'react'
import { Button } from 'antd'
import { Layout } from '@shared/layout'
import { FeatureToggle } from './index'

export default () => {
  return (
    <Layout
      title="Feature Toggle 多用来测试新功能"
      content={
        <FeatureToggle toggleName="breadcrumbToggles">
          {isToggleOn =>
            isToggleOn ? (
              <Fragment>
                <p>😝赶快切换回来吧!!!😝</p>
                <Button type="primary">
                  <a href="/?breadcrumbToggles=false">false</a>
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <p>地址栏用query可以切换我的显示 ?breadcrumbToggles=true</p>
                <Button type="primary">
                  <a href="/?breadcrumbToggles=true">true</a>
                </Button>
              </Fragment>
            )
          }
        </FeatureToggle>
      }
    />
  )
}
