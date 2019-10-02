import React from 'react'
import App from '../App'
import { shallow, mount } from 'enzyme'
import { Switch, Route, MemoryRouter } from 'react-router-dom'
import Home from '../home/index'
import Cart from '../cart/index'

describe('Test App', () => {
  describe('Test Routing', () => {
    it('Redirect correct to Home Page ', () => {
      let wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <Route path='/' render={() => <Home data={[]} />} />
        </MemoryRouter>
      )
      expect(wrapper.find(Home)).toHaveLength(1)
    })

    it('Redirect correct to Cart Page ', () => {
      let wrapper = mount(
        <MemoryRouter initialEntries={['/cart']}>
          <Route path='/cart' render={() => <Cart cart={[]} />} />
        </MemoryRouter>
      )
      expect(wrapper.find(Cart)).toHaveLength(1)
    })
  })
})
