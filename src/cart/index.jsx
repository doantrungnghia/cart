import Cart from './components/Cart'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  cart: state.cartList.cart
})

export default connect(mapStateToProps)(Cart)
