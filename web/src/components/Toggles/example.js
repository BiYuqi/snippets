import React from 'react'
import Layout from '../../shared/Layout'
import { FeatureToggle } from './index'

export default () => {
  return (
    <Layout>
      <FeatureToggle toggleName="breadcrumbToggles">
        {isToggleOn =>
          isToggleOn ? (
            <div className="magic-program_title">
              😝赶快切换回来吧!!!😝
              <br />
              <a href="/?breadcrumbToggles=false">false</a>
            </div>
          ) : (
            <div className="magic-program_title">
              地址栏用query可以切换我的显示 ?breadcrumbToggles=true <br />
              <a href="/?breadcrumbToggles=true">true</a>
            </div>
          )
        }
      </FeatureToggle>
    </Layout>
  )
}
