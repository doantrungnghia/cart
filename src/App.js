import React, { Component } from 'react'
import Home from './home'
import Cart from './cart'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { productData } from './data/index'
import BannerSlider from './components/BannerSlider'
import CartNone from './cart/components/CartNone'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      cart: [],
      productIds: []
    }
  }

  addProductToCart = data => {
    const { cart, productIds } = this.state
    if (productIds.includes(data.id)) {
      this.setState({
        cart: cart.map(item => {
          return item.id === data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        })
      })
    } else {
      this.setState({
        cart: cart.concat(data),
        productIds: productIds.concat(data.id)
      })
    }
  }

  updateProductToCart = data => {
    this.setState({
      cart: data
    })
  }

  componentDidMount() {
    this.setState({
      data: productData
    })
  }

  render() {
    const { data, cart } = this.state
    if (!data) return null

    return (
      <Router>
        <Navbar dark expand='md'>
          <Link to='/'>
            <img
              className='img-fluid logo'
              src='https://www.jml.sg/assets/jml_new_logo-4c099e3bf7cb23709b7ef41c81e50e1c.png'
              alt=''
            />
          </Link>
          <Nav className='ml-auto' navbar>
            <Link to='/cart'>
              <NavItem className='position-relative cart-count-wrapper'>
                <img
                  src='https://www.jml.sg/assets/shopping-cart-8b67cc0c3394412d73ffb41ebf3100e6.svg'
                  className='cart-icon'
                  alt='kvy-tech'
                />
                <strong>Cart</strong>
                <span className='cart-count'>
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </NavItem>
            </Link>
          </Nav>
        </Navbar>
        <BannerSlider />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home addProductToCart={this.addProductToCart} data={data} />
            )}
          ></Route>
          <Route
            exact
            path='/cart'
            render={() =>
              cart.length ? (
                <Cart
                  cart={cart}
                  updateProductToCart={this.updateProductToCart}
                />
              ) : (
                <CartNone />
              )
            }
          ></Route>
        </Switch>
      </Router>
    )
  }
}
