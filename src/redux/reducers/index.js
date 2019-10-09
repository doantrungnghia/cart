import { combineReducers } from 'redux'
import { products } from './products'
import { cartList } from './cartList'

export default combineReducers({
  products,
  cartList
})
