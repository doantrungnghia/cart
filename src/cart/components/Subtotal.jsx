import React from 'react'

export const Subtotal = ({ total }) => {
  return (
    <div className='col-lg-4 col-sm-5 col-12 mt-sm-0 mt-4'>
      <div className='cart-checkout bg-white'>
        <ul className='p-0 d-md-flex justify-content-between text-center'>
          <li>
            <strong>Subtotal: </strong>
          </li>
          <li>
            <span className='product-price'>{total} VND</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
