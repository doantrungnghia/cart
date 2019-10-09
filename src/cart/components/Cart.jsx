import React from 'react'
import { numberWithCommas } from '../../functions/index'
import EmptyCart from './EmptyCart'
import Layout from '../../layouts/Layout'
import ProductList from '../../components/ProductList'
import { productData } from '../../data/index'
import CartItemList from './CartItemList'
import { Subtotal } from './Subtotal'

export default function Cart({ cart }) {
  return (
    <Layout>
      <section className='cart'>
        {cart.length ? (
          <div className='container'>
            <h2 className='cart-title'>
              GIỎ HÀNG{' '}
              <small>
                ({cart.reduce((total, item) => total + item.quantity, 0)} sản
                phẩm)
              </small>
            </h2>
            <div className='row'>
              <div className='col-lg-8 col-sm-7 col-12'>
                <div className='container'>
                  <CartItemList cart={cart} />
                </div>
              </div>
              <Subtotal
                total={numberWithCommas(
                  cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                )}
              />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </section>
      <ProductList slider products={productData} />
    </Layout>
  )
}
