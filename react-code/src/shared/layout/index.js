import React, { Component } from 'react'
import { Empty, Card } from 'antd'

export class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log({ error })
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log({
      error,
      info
    })
  }

  render() {
    if (this.state.hasError) {
      return <Empty description={<span>当前组件渲染失败，请检查错误</span>} />
    }
    const { title = '', content, actions } = this.props
    return (
      <Card>
        {title && <h4>{title}</h4>}
        {content}
        <div style={{ height: '20px' }} />
        {actions}
      </Card>
    )
  }
}
