import React from 'react'
import { numberWithCommas } from '../../functions/index'

export const CartItemCount = ({ quantity, setQuantityCartItem, id }) => {
  const preventSpecialCharacters = e => {
    if (e.keyCode === 190) {
      e.preventDefault(0)
    }
  }

  const getValue = e => {
    setQuantityCartItem(id, Number(e.target.value))
  }

  return (
    <div className='d-flex mt-2'>
      <i>Quantity: </i>
      <input
        type='number'
        className='count-quantity'
        value={quantity}
        id={id}
        onKeyDown={preventSpecialCharacters}
        onChange={getValue}
        min={1}
      />
    </div>
  )
}

export const CartItem = ({
  id,
  title,
  price,
  description,
  image,
  quantity,
  setQuantityCartItem,
  removeCartItem
}) => {
  return (
    <div className='row cart-item text-md-left text-center'>
      <div className='col-lg-3 col-12'>
        <img className='img-fluid' src={image} alt='' />
      </div>
      <div className='col-lg-9 col-12 pt-3'>
        <h4 className='product-title'>{title}</h4>
        <span className='product-price'>{numberWithCommas(price)}</span>
        <CartItemCount
          id={id}
          setQuantityCartItem={setQuantityCartItem}
          quantity={quantity}
        />
        <p className='product-des'>{description}</p>
        <button onClick={removeCartItem} className='cart-remove text-center'>
          Remove this item
        </button>
      </div>
    </div>
  )
}
