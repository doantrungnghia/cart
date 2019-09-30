import React from 'react';
import Home from './home';
import Cart from './cart';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar dark expand="md">
        <Link to="/">List Product</Link>
        <Nav className="ml-auto" navbar>
          <Link to="/cart">
          <NavItem className="position-relative">
            <span className="cart-count">0</span>
            <img src="https://img.icons8.com/dusk/64/000000/add-shopping-cart.png" className="cart-icon"/>
          </NavItem>
          </Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
