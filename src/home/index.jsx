import React, { Component } from 'react'
import { Product } from '../components/Product'

export default class Home extends Component {
  addToCart = (id, title, price, description, image) => {
    const item = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      quantity: 1
    }
    this.props.addProductToCart(item)
  }

  render() {
    return (
      <div className='home'>
        <div className='container'>
          <div className='row'>
            {this.props.data.map(data => {
              return (
                <Product
                  addToCart={this.addToCart}
                  key={`product-${data.id}`}
                  {...data}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
