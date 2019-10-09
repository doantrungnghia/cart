import React from 'react'
import { CartItem } from './CartItem'
import { connect } from 'react-redux'
import { removeCartItem, setQuantityCartItem } from '../../redux/actions/index'

function CartItemList({ cart, dispatch }) {
  return cart.map(item => {
    return (
      <CartItem
        key={`cart-item-${item.id}`}
        {...item}
        removeCartItem={() => dispatch(removeCartItem(item.id))}
        setQuantityCartItem={(id, quantity) =>
          dispatch(setQuantityCartItem(id, quantity))
        }
      />
    )
  })
}

export default connect()(CartItemList)
