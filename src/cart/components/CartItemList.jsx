import React from 'react'
import { CartItem } from './CartItem'
import { connect } from 'react-redux'
import { removeCartItem, setQuantityCartItem } from '../../redux/actions/index'

function CartItemList({ cart, removeCartItem, setQuantityCartItem }) {
  return cart.map(item => {
    return (
      <CartItem
        key={`cart-item-${item.id}`}
        {...item}
        removeCartItem={() => removeCartItem(item.id)}
        setQuantityCartItem={setQuantityCartItem}
      />
    )
  })
}

const mapDispatchToProps = dispatch => ({
  removeCartItem: idRemove => dispatch(removeCartItem(idRemove)),
  setQuantityCartItem: (idSet, quantity) =>
    dispatch(setQuantityCartItem(idSet, quantity))
})

export default connect(
  null,
  mapDispatchToProps
)(CartItemList)
