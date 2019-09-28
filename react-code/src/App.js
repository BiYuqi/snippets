import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import FeatureToggle from './components/feature-toggle/example'
import Conditions from './components/conditions/example'
import { ClickBox } from './hooks/click-outside/example'
import { IsOnline } from './hooks/is-online/example'
import { ControlledInputExample } from './hooks/crontrolled-input/example'
import { LimitedTextareaExample } from './hooks/limited-textarea/example'
import './App.scss'

const App = () => {
  return (
    <Fragment>
      <Row gutter={24} align="middle">
        <Col span={3}>
          <FeatureToggle />
        </Col>
        <Col span={3}>
          <Conditions />
        </Col>
        <Col span={3}>
          <ClickBox onClickOutside={() => console.log('You clicked me!')} />
        </Col>
        <Col span={3}>
          <IsOnline />
        </Col>
        <Col span={6}>
          <ControlledInputExample />
        </Col>
        <Col span={6}>
          <LimitedTextareaExample />
        </Col>
      </Row>
    </Fragment>
  )
}

export default App
