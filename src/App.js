import React, { Component } from 'react'
import Home from './home'
import Cart from './cart'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { productData } from './data/index'

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
          <Link to='/'>List Product</Link>
          <Nav className='ml-auto' navbar>
            <Link to='/cart'>
              <NavItem className='position-relative'>
                <span className='cart-count'>
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
                <img
                  src='https://img.icons8.com/dusk/64/000000/add-shopping-cart.png'
                  className='cart-icon'
                  alt='kvy-tech'
                />
              </NavItem>
            </Link>
          </Nav>
        </Navbar>
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
            render={() => (
              <Cart
                cart={cart}
                updateProductToCart={this.updateProductToCart}
              />
            )}
          ></Route>
        </Switch>
      </Router>
    )
  }
}
