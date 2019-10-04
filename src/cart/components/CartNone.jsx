import React from 'react'
import { Link } from 'react-router-dom'

export default function CartNone() {
  return (
    <div className='container'>
      <div className='cart-none text-center'>
        <img
          src='https://salt.tikicdn.com/desktop/img/mascot.png'
          alt=''
          srcSet=''
        />
        <p className='mt-4'>Không có sản phẩm nào trong giỏ hàng của bạn</p>
        <Link to='/' className='btn-add-cart'>
          Tiếp tục mua sắm
        </Link>
      </div>
    </div>
  )
}
