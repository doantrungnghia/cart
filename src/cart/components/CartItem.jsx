import React from 'react'
import { numberWithCommas } from '../../functions/index'

const buildOptions = () => {
  var arr = []
  for (let i = 1; i <= 20; i++) {
    arr.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }
  return arr
}

export const CartItemCount = ({ value, setQuantity, id }) => {
  return (
    <select
      onChange={setQuantity}
      className='select-count ml-4 bg-white'
      defaultValue={value}
      id={id}
    >
      {buildOptions()}
    </select>
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
    <div className='row cart-item'>
      <div className='col-lg-3 col-12'>
        <img className='img-fluid' src={image} alt='' />
      </div>
      <div className='col-lg-9 col-12 pt-3'>
        <h4 className='product-title'>{title}</h4>
        <span className='product-price'>{numberWithCommas(price)}</span>
        <CartItemCount id={id} setQuantity={setQuantity} value={quantity} />
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
