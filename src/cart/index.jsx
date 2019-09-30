import React, { Component } from "react";
import { numberWithCommas } from "../functions/index";

const buildOptions = () => {
  var arr = [];
  for (let i = 1; i <= 90; i++) {
    arr.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return arr;
};

const CartItemCount = ({ value, setQuantity, id }) => {
  return (
    <select
      onChange={setQuantity}
      className="select-count ml-4 bg-white"
      defaultValue={value}
      id={id}
    >
      {buildOptions()}
    </select>
  );
};

const CartItem = ({
  id,
  title,
  price,
  description,
  image,
  quantity,
  removeItem,
  setQuantity
}) => {
  return (
    <div className="row cart-item">
      <div className="col-3">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="col-9 pt-3">
        <h4 className="product-title">{title}</h4>
        <span className="product-price">{numberWithCommas(price)}</span>
        <CartItemCount id={id} setQuantity={setQuantity} value={quantity} />
        <p className="product-des">{description}</p>
        <button
          onClick={() => removeItem(id)}
          className="cart-remove text-center"
        >
          Remove this item
        </button>
      </div>
    </div>
  );
};

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    this.setState({
      cart: this.props.cart
    });
  }

  setQuantity = e => {
    const { cart } = this.state;
    const id = Number(e.target.id);
    const quantity = Number(e.target.value);
    this.setState({
      cart: cart.map(item => {
        return item.id === id ? { ...item, quantity: quantity } : item;
      })
    });
    this.props.pushDataFromCart(
      cart.map(item => {
        return item.id === id ? { ...item, quantity: quantity } : item;
      })
    );
  };

  removeItem = id => {
    const { cart } = this.state;
    this.setState({
      cart: cart.filter(item => item.id !== id)
    });
    this.props.pushDataFromCart(cart.filter(item => item.id !== id));
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="container">
              {cart.map(data => {
                return (
                  <CartItem
                    {...data}
                    key={`cart-item-${data.id}`}
                    removeItem={this.removeItem}
                    setQuantity={this.setQuantity}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="cart-checkout bg-white">
              <ul>
                <li className="d-flex justify-content-between">
                  <span>Subtotal: </span>
                  <span className="product-price">
                    {numberWithCommas(
                      cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                    )}{" "}
                    VND
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
