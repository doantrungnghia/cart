import React from 'react'
import Layout from '../../layouts/Layout'
import ProductList from '../../components/ProductList'

export default function Home({ products }) {
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
