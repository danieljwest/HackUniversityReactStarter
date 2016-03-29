import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../src/components/Main.js'

describe('(Component) Main', function () {
  it('should contain a div', () => {
    debugger
    let shallowRender = shallow(<Main />)
    expect(shallowRender).to.have.descendants('div')
  })
  
  it('should say Hooray', () => {
    let shallowRender = shallow(<Main />)
    expect(shallowRender).to.have.html().match(/Hooray/)
  })
  
})