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

  getDataAfterAdd = (data) =>{
    const {cart} = this.state;
    console.log(cart)
    const flag = 0;
    for(let i in cart){
      if(cart[i].id === data.id){
        flag = 1;
        console.log(cart[i]);
      }
    }
    if(!flag){
    this.setState({
      cart: cart.concat(data),
    })
    }
  }

  componentDidMount() {
    this.setState({
      data: productData
    })
  }

  render() {
    const {data,cart} = this.state;
    if(!data) return null;
    
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
          <Route exact path="/" render={() => <Home pushDataToApp={this.getDataAfterAdd} data={data}/>}></Route>
          <Route path="/cart" render={()=><Cart cart={cart}/>}>
          </Route>
        </Switch>
      </Router>
    )
  }
}
