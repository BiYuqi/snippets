import React from 'react'
import FeatureToggle from './components/toggles/example'
import Conditions from './components/conditions/example'
import { ClickBox } from './hooks/click-outside/example'
import './App.scss'

const App = () => {
  return (
    <div className="magic-program">
      <FeatureToggle />
      <Conditions />
      <ClickBox onClickOutside={() => console.log('You clicked me!')} />
    </div>
  )
}

export default App
