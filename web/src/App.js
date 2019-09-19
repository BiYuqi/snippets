import React from 'react'
import { FeatureToggle } from './components/toggles'
import { Conditions } from './components/conditions'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="magic-program">
        <FeatureToggle toggleName="breadcrumbToggles">
          {isToggleOn =>
            isToggleOn ? (
              <div className="magic-program_title">Hard Code</div>
            ) : (
              <div className="magic-program_title">Magic Programming</div>
            )
          }
        </FeatureToggle>
        <Conditions
          data={{ isLogin: true }}
          yes={<div>我是组件Conditions, 我的状态是Yes</div>}
          no={<div>我是组件Conditions, 我的状态是No</div>}
        />
      </div>
    )
  }
}

export default App
