import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Layout'
import ProductDetail from './ProductDetail'
import { Route } from 'react-router-dom'
import { getProducts, addProductToCart } from '../redux/actions/index'

function ProductDetailList({ products, dispatch }) {
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Layout>
      {products.map(item => {
        return (
          <Route
            path={`/${item.title}`}
            key={`product-detail-router-${item.id}`}
          >
            <ProductDetail
              key={`product-detail-${item.id}`}
              {...item}
              addProductToCart={() => dispatch(addProductToCart({ ...item }))}
            />
          </Route>
        )
      })}
    </Layout>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductDetailList)
