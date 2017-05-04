import React from 'react'
import { shallow } from 'enzyme'
import HelloWorld from '../index.js'

it('Should render <HelloWorld />', () => {
  shallow(<HelloWorld />)
})
