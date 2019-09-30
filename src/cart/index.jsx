import React, { Component } from 'react'
import { numberWithCommas } from "../functions/index"
const buildOptions = () => {
  var arr = [];
  for (let i = 1; i <= 90; i++) {
    arr.push(<option key={i} value="{i}">{i}</option>)
  }
  return arr;
}
const CartItemCount = () =>{
  return (
    <select className="select-count ml-4 bg-white">
      {buildOptions()}
    </select >
  )
}
const CartItem = ({title, price, description, image}) =>{
  return(
    <div className="row cart-item">
      <div className="col-3">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="col-9 pt-3">
        <h4 className="product-title">{title}</h4>
        <span className="product-price">{numberWithCommas(price)}</span>
        <CartItemCount/>
        <p className="product-des">{description}</p>
        <button className="cart-remove text-center">Remove this item</button>
      </div>
    </div>
  )
}
export default class Cart extends Component {
  constructor(props){
    super(props);
    this.state= ({
      cart: []
    })
  }
  componentDidMount(){
    this.setState({
      cart: this.props.cart
    })
  }
  render() {
    const {cart} = this.state;
    console.log(cart)
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="container">
             
            </div>
            {cart.map(data=>{
              return <CartItem {...data} key={`cart-item-${data.id}`}/>
            })}
          </div>
          <div className="col-4">
            <div className="cart-checkout bg-white">
              <ul>
                <li className="d-flex justify-content-between">
                  <span>Subtotal(1 item)</span>
                  <span className="product-price">

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
