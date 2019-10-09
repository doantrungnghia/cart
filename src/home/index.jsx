import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import { getProducts } from '../redux/actions/index'

function Home({ products, dispatch }) {
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Layout>
      <div className='home'>
        <div className='container'>
          <div className='heading-title'>
            <span>PRODUCT</span>
          </div>
          <div className='row'>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(Home)
