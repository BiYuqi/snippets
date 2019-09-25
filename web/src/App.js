import React from 'react'
import FeatureToggle from '@cpts/toggles/example'
import Conditions from '@cpts/conditions/example'
import { ClickBox } from '@hooks/click-outside/example'
import { IsOnline } from '@hooks/is-online/example'
import './App.scss'

const App = () => {
  return (
    <div className="magic-program">
      <FeatureToggle />
      <Conditions />
      <ClickBox onClickOutside={() => console.log('You clicked me!')} />
      <IsOnline />
    </div>
  )
}

export default App
