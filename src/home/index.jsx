import React, { Component } from 'react'
import { Product } from '../components/Product'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='container'>
          <div className='heading-title'>
            <span>PRODUCT</span>
          </div>
          <div className='row'>
            {this.props.data.map(data => {
              return (
                <Product
                  addProductToCart={this.props.addProductToCart}
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
