import React from "react"
import { shallow } from "enzyme"
import App from '../App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should render correct title', () => {
    expect(wrapper.find('.magin-program_title').text()).toBe('Ftb React Demo')
  })
})