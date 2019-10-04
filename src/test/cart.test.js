import React from 'react'
import { productData } from '../data/index'
import { shallow, mount } from 'enzyme'
import { CartItem, CartItemCount } from '../cart/components/CartItem'
import Cart from '../cart/index'
import { numberWithCommas } from '../functions/index'

describe('Cart Page', () => {
  const removeItemFunction = jest.fn()
  const setQuantityFunction = jest.fn()
  const updateProductToCart = jest.fn()
  const cartPage = mount(
    <Cart updateProductToCart={updateProductToCart} cart={[]} />
  )
  const cartItem = shallow(
    <CartItem
      {...productData[0]}
      removeItem={removeItemFunction}
      setQuantity={setQuantityFunction}
    />
  )

  describe('Testing Function', () => {
    it('removeItem is wrorking', () => {
      const cartItemRemoveBtn = cartItem.find('.cart-remove')
      cartItemRemoveBtn.simulate('click')
      expect(removeItemFunction).toHaveBeenCalled()
    })

    it('setQuantity is wrorking', () => {
      const cartItemSetQuantitySelect = cartItem.find(CartItemCount)
      cartItemSetQuantitySelect.props().setQuantity(2)
      expect(setQuantityFunction).toHaveBeenCalled()
    })
  })

  it('Render Correctly Length of CartItem', () => {
    cartPage.setState({ cart: productData })
    expect(cartPage.find('.cart-item').length).toEqual(productData.length)
  })

  describe('Render Correctly CartItem', () => {
    it('title', () => {
      expect(cartItem.find('.product-title').props().children).toEqual(
        productData[0].title
      )
    })

    it('price', () => {
      expect(cartItem.find('.product-price').props().children).toEqual(
        numberWithCommas(productData[0].price)
      )
    })

    it('description', () => {
      expect(cartItem.find('.product-des').props().children).toEqual(
        productData[0].description
      )
    })

    it('image', () => {
      expect(cartItem.find('img').prop('src')).toEqual(productData[0].image)
    })
  })
})
