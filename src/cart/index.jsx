import React, { Component } from 'react'
import { numberWithCommas } from '../functions/index'
import { CartItem } from './components/CartItem'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
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
    this.setState({
      cart: cart.map(item => {
        return item.id === id ? { ...item, quantity: quantity } : item
      })
    })
    this.props.updateProductToCart(
      cart.map(item => {
        return item.id === id ? { ...item, quantity: quantity } : item
      })
    )
  }

  removeItem = id => {
    const { cart } = this.state
    this.setState({
      cart: cart.filter(item => item.id !== id)
    })
    this.props.updateProductToCart(cart.filter(item => item.id !== id))
  }

  render() {
    const { cart } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
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
          <div className='col-4'>
            <div className='cart-checkout bg-white'>
              <ul className='p-0 d-md-flex justify-content-between'>
                <li>
                  <span>Subtotal: </span>
                </li>
                <li>
                  <span className='product-price'>
                    {cart
                      ? numberWithCommas(
                          cart.reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          )
                        )
                      : 0}{' '}
                    VND
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
