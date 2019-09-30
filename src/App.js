import React, { Component } from "react";
import Home from "./home";
import Cart from "./cart";
import { Navbar, Nav, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { productData } from "./data/index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      cart: [],
      cartCount: 0
    };
  }

  getDataAfterAdd = data => {
    const { cart } = this.state;
    this.setState({
      cart: cart.filter(item => item.id === data.id).length
        ? cart.map(item => {
            return item.id === data.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          })
        : cart.concat(data)
    });
  };

  getDataFromCart = data => {
    const { cart } = this.state;
    this.setState({
      cart: data
    });
    setTimeout(() => {
      console.log(cart);
    }, 1000);
  };

  componentDidMount() {
    this.setState({
      data: productData
    });
  }

  render() {
    const { data, cart } = this.state;
    if (!data) return null;

    return (
      <Router>
        <Navbar dark expand="md">
          <Link to="/">List Product</Link>
          <Nav className="ml-auto" navbar>
            <Link to="/cart">
              <NavItem className="position-relative">
                <span className="cart-count">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
                <img
                  src="https://img.icons8.com/dusk/64/000000/add-shopping-cart.png"
                  className="cart-icon"
                  alt="kvy-tech"
                />
              </NavItem>
            </Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home pushDataFromHome={this.getDataAfterAdd} data={data} />
            )}
          ></Route>
          <Route
            path="/cart"
            render={() => (
              <Cart cart={cart} pushDataFromCart={this.getDataFromCart} />
            )}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
