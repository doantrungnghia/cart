import React, { Component } from 'react'
import { numberWithCommas } from '../functions/index'
import { CartItem } from './components/CartItem'
import EmptyCart from './components/EmptyCart'
import ProductSlider from '../components/ProductSlider'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  componentWillReceiveProps(props) {
    const { cart } = this.state
    const newCart = props.cart
    if (cart !== newCart) {
      this.setState({
        cart: newCart
      })
    }
  }

  componentDidMount() {
    this.setState({
      cart: this.props.cart
    })
  }

  setQuantity = e => {
    const { cart } = this.state
    const id = Number(e.target.id)
    const quantity = Number(e.target.value)
    this.setState(
      {
        cart: cart.map(item => {
          return item.id === id ? { ...item, quantity: quantity } : item
        })
      },
      () => {
        this.props.updateProductToCart(this.state.cart)
      }
    )
  }

  removeItem = id => {
    const { cart } = this.state
    this.setState(
      {
        cart: cart.filter(item => item.id !== id)
      },
      () => {
        this.props.updateProductToCart(this.state.cart, id)
      }
    )
  }

  render() {
    const { cart } = this.state
    return (
      <React.Fragment>
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
                    {cart
                      ? cart.map(data => {
                          return (
                            <CartItem
                              {...data}
                              key={`cart-item-${data.id}`}
                              removeItem={this.removeItem}
                              setQuantity={this.setQuantity}
                            />
                          )
                        })
                      : ''}
                  </div>
                </div>
                <div className='col-lg-4 col-sm-5 col-12 mt-sm-0 mt-4'>
                  <div className='cart-checkout bg-white'>
                    <ul className='p-0 d-md-flex justify-content-between text-center'>
                      <li>
                        <strong>Subtotal: </strong>
                      </li>
                      <li>
                        <span className='product-price'>
                          {numberWithCommas(
                            cart.reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0
                            )
                          )}{' '}
                          VND
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </section>
        <ProductSlider addProductToCart={this.props.addProductToCart} />
      </React.Fragment>
    )
  }
}
