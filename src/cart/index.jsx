import React from 'react'
import { numberWithCommas } from '../functions/index'
import EmptyCart from './components/EmptyCart'
import { connect } from 'react-redux'
import Layout from '../layouts/Layout'
import ProductList from '../components/ProductList'
import { productData } from '../data/index'
import CartItemList from './components/CartItemList'

const Subtotal = ({ total }) => {
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

function Cart({ cart }) {
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

const mapStateToProps = state => ({
  cart: state.cartList.cart
})

export default connect(mapStateToProps)(Cart)
