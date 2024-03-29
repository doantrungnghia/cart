import React from 'react'
import Home from '../home/index'
import { productData } from '../data/index'
import { shallow, mount } from 'enzyme'
import { Product } from '../components/Product'
import { numberWithCommas } from '../functions/index'
import { BrowserRouter } from 'react-router-dom'

describe('Home Page', () => {
  const product = shallow(<Product {...productData[0]} />)
  const addProductToCart = jest.fn()
  const homePage = mount(
    <BrowserRouter>
      <Home addProductToCart={addProductToCart} data={productData} />
    </BrowserRouter>
  )

  it('Render List Products Correctly - length', () => {
    expect(homePage.find('.product-item').length).toBe(productData.length)
  })

  it('AddToCart function in Product is working', () => {
    const addCartBtn = homePage.find('.btn-add-cart').first()
    addCartBtn.simulate('click')
    expect(addProductToCart).toHaveBeenCalled()
  })

  describe('Render Product Correctly', () => {
    it('title', () => {
      expect(product.find('.product-title').props().children).toEqual(
        productData[0].title
      )
    })

    it('price', () => {
      expect(product.find('.product-price').props().children[0]).toEqual(
        numberWithCommas(productData[0].price)
      )
    })

    it('description', () => {
      expect(product.find('.product-des').props().children).toEqual(
        productData[0].description
      )
    })

    it('image', () => {
      expect(product.find('.product-image').prop('src')).toEqual(
        productData[0].image
      )
    })
  })
})
