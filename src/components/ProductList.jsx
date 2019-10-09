import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { addProductToCart } from '../redux/actions/index'
import Carousel from 'react-multi-carousel'

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

function ProductList({ products, slider, dispatch }) {
  const listProducts = products.map(item => {
    return (
      <Product
        key={`product-${item.id}`}
        {...item}
        className={slider ? 'h-100' : ''}
        addProductToCart={() => dispatch(addProductToCart({ ...item }))}
      />
    )
  })

  return slider ? (
    <div className='container mb-4 pb-4'>
      <Carousel responsive={responsive} className='product-slider'>
        {listProducts}
      </Carousel>
    </div>
  ) : (
    listProducts
  )
}

export default connect()(ProductList)
