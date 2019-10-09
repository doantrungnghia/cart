import React from 'react'
import Layout from '../layouts/Layout'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import {
  requestProducts,
  receiveProducts,
  rejectProducts
} from '../redux/actions/index'

function fetchPosts() {
  const URL = 'https://api.myjson.com/bins/178haz'
  return fetch(URL, { method: 'GET' }).then(response =>
    Promise.all([response, response.json()])
  )
}

function fetchPostsWithRedux() {
  return dispatch => {
    dispatch(requestProducts())
    return fetchPosts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(receiveProducts(json))
      } else {
        dispatch(rejectProducts())
      }
    })
  }
}

let flag = 0

function Home({ products, fetchPostsWithRedux }) {
  if (!flag) {
    fetchPostsWithRedux()
    flag = 1
  }

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

export default connect(
  mapStateToProps,
  { fetchPostsWithRedux }
)(Home)
