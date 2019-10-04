import React, { Component } from 'react'
import Home from './home'
import Cart from './cart'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { productData } from './data/index'
import BannerSlider from './components/BannerSlider'
import ProductDetail from './components/ProductDetail'
import ModalAdded from './components/ModalAdded'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      cart: [],
      productIds: [],
      modalStatus: false
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
        }),
        modalStatus: true
      })
    } else {
      this.setState({
        cart: cart.concat(data),
        productIds: productIds.concat(data.id),
        modalStatus: true
      })
    }
  }

  updateProductToCart = (data, idRemove) => {
    const { productIds } = this.state
    this.setState({
      cart: data,
      productIds: productIds.filter(productId => productId !== idRemove),
      modalStatus: false
    })
  }

  componentDidMount() {
    this.setState({
      data: productData
    })
  }

  render() {
    const { data, cart, modalStatus, productIds } = this.state
    if (!data) return null

    return (
      <Router>
        <ModalAdded modalStatus={modalStatus} />
        <Navbar dark expand='md'>
          <div className='container'>
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
          </div>
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
            render={() => (
              <Cart
                cart={cart}
                productIds={productIds}
                updateProductToCart={this.updateProductToCart}
                addProductToCart={this.addProductToCart}
              />
            )}
          ></Route>
          {data.map(item => (
            <Route
              key={`product-detail-${item.id}`}
              exact
              path={'/' + item.title}
              render={() => (
                <ProductDetail
                  addProductToCart={this.addProductToCart}
                  {...item}
                />
              )}
            ></Route>
          ))}
        </Switch>
      </Router>
    )
  }
}
