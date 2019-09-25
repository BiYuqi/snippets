import React, { Fragment } from 'react'
import { Button } from 'antd'
import { Layout, InnerContent } from '@shared/layout'
import { FeatureToggle } from './index'

export default () => {
  return (
    <Layout>
      <InnerContent>
        <FeatureToggle toggleName="breadcrumbToggles">
          {isToggleOn =>
            isToggleOn ? (
              <Fragment>
                <p>😝赶快切换回来吧!!!😝</p>
                <Button>
                  <a href="/?breadcrumbToggles=false">false</a>
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <p>地址栏用query可以切换我的显示 ?breadcrumbToggles=true</p>
                <Button>
                  <a href="/?breadcrumbToggles=true">true</a>
                </Button>
              </Fragment>
            )
          }
        </FeatureToggle>
      </InnerContent>
    </Layout>
  )
}
