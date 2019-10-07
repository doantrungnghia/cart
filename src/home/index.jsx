import React from 'react'
import Layout from '../layouts/Layout'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

function Home({ products }) {
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
