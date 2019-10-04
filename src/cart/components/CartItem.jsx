import React from 'react'
import { numberWithCommas } from '../../functions/index'

export const CartItemCount = ({ quantity, setQuantity, id }) => {
  return (
    <div className='d-flex mt-2'>
      <i>Quantity: </i>
      <input
        type='number'
        className='count-quantity'
        value={quantity}
        id={id}
        onChange={setQuantity}
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
  removeItem,
  setQuantity
}) => {
  return (
    <div className='row cart-item text-md-left text-center'>
      <div className='col-lg-3 col-12'>
        <img className='img-fluid' src={image} alt='' />
      </div>
      <div className='col-lg-9 col-12 pt-3'>
        <h4 className='product-title'>{title}</h4>
        <span className='product-price'>{numberWithCommas(price)}</span>
        <CartItemCount id={id} setQuantity={setQuantity} quantity={quantity} />
        <p className='product-des'>{description}</p>
        <button
          onClick={() => removeItem(id)}
          className='cart-remove text-center'
        >
          Remove this item
        </button>
      </div>
    </div>
  )
}
