import React, { Component } from 'react'
import { numberWithCommas } from '../functions/index'
import { productData } from '../data'
import ProductList from './ProductList'

export default class ProductDetail extends Component {
  render() {
    const {
      image,
      title,
      price,
      description,
      detail,
      addProductToCart
    } = this.props

    return (
      <React.Fragment>
        <div className='container product-detail-wrapper'>
          <div className='product-detail bg-white'>
            <div className='row'>
              <div className='col-sm-5 col-12'>
                <div>
                  <img className='img-fluid' src={image} alt='' srcSet='' />
                </div>
              </div>
              <div className='col-sm-7 col-12 mt-sm-0 mt-4'>
                <div className='product-title'>{title}</div>
                <div className='product-price'>
                  {numberWithCommas(price)} VND
                </div>
                <div className='product-des'>{description}</div>
                <div className='product-detail-text mt-3'>{detail}</div>
                <button
                  className='btn-add-cart mt-3'
                  onClick={addProductToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductList products={productData} slider />
      </React.Fragment>
    )
  }
}
