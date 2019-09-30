import React, { Component } from 'react'
import Home from './home';
import Cart from './cart';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { productData } from "./data/index"
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: null,
      cart: []
    })
  }
  getCart = (data) =>{
    const {cart} = this.state
    this.setState({
      cart: cart.concat(data),
    })
  }
  componentDidMount() {
    this.setState({
      data: productData
    })
  }
  render() {
    const {data,cart} = this.state;
    if(!data) return null;
    console.log('render')
    return (
      <Router>
        <Navbar dark expand="md">
          <Link to="/">List Product</Link>
          <Nav className="ml-auto" navbar>
            <Link to="/cart">
              <NavItem className="position-relative">
                <span className="cart-count">{cart.length}</span>
                <img src="https://img.icons8.com/dusk/64/000000/add-shopping-cart.png" className="cart-icon" alt="kvy-tech" />
              </NavItem>
            </Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" render={()=><Home pushDataToApp={this.getCart} data={data}/>}></Route>
          <Route path="/cart" component={Cart}>
          </Route>
        </Switch>
      </Router>
    )
  }
}