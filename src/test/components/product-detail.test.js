import React from 'react'
import { productData } from '../../data/index'
import { shallow } from 'enzyme'
import { numberWithCommas } from '../../functions/index'
import ProductDetail from '../../components/ProductDetail'

describe('Product-Detail', () => {
  const addProductToCart = jest.fn()
  const productDetail = shallow(
    <ProductDetail addProductToCart={addProductToCart} {...productData[0]} />
  )

  it('AddProductToCart function in Product is working', () => {
    const addCartBtn = productDetail.find('.btn-add-cart')
    addCartBtn.simulate('click')
    expect(addProductToCart).toHaveBeenCalled()
  })

  describe('Render Product-Detail Correctly', () => {
    it('title', () => {
      expect(productDetail.find('.product-title').props().children).toEqual(
        productData[0].title
      )
    })

    it('price', () => {
      expect(productDetail.find('.product-price').props().children[0]).toEqual(
        numberWithCommas(productData[0].price)
      )
    })

    it('description', () => {
      expect(productDetail.find('.product-des').props().children).toEqual(
        productData[0].description.trim()
      )
    })

    it('image', () => {
      expect(productDetail.find('img').prop('src')).toEqual(
        productData[0].image
      )
    })
  })
})
