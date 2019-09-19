import React from 'react'
import toggles from './toggles.js'
import parseQuery from '../../utils/parseQuery'

export const FeatureToggle = props => {
  const { toggleName } = props
  const parseQueryValue = parseQuery(window.location.href)
  let isToggleOn

  if (!toggles.features.includes(toggleName)) {
    isToggleOn = false
  }
  isToggleOn =
    parseQueryValue[toggleName] && parseQueryValue[toggleName] === 'true' ? true : false || false
  return <React.Fragment>{props.children(isToggleOn)}</React.Fragment>
}
