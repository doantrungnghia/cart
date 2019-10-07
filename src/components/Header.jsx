import React from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ cart }) => {
  return (
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
                {cart.length
                  ? cart.reduce((total, item) => total + item.quantity, 0)
                  : 0}
              </span>
            </NavItem>
          </Link>
        </Nav>
      </div>
    </Navbar>
  )
}

const mapStateToProps = state => ({
  cart: state.cartList.cart
})
export default connect(mapStateToProps)(Header)
