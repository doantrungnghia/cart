import { connect } from 'react-redux'
import Home from './components/Home'

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(Home)
