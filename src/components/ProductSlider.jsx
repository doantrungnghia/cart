import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import { Product } from './Product'
import { productData } from '../data/index'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export default class ProductSlider extends Component {
  render() {
    return (
      <div className='container mb-4 pb-4'>
        <Carousel responsive={responsive} className='product-slider'>
          {productData.map(item => {
            return (
              <Product
                className='h-100'
                key={`product-slider-${item.id}`}
                {...item}
                addProductToCart={this.props.addProductToCart}
              />
            )
          })}
        </Carousel>
      </div>
    )
  }
}
