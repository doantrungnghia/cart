import React from 'react'
import Home from './home/index'
import Cart from './cart/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

const AlertTemplate = () => (
  <div className='bg-white p-4 rounded'>
    <div className='success-checkmark'>
      <div className='check-icon'>
        <span className='icon-line line-tip'></span>
        <span className='icon-line line-long'></span>
        <div className='icon-circle'></div>
        <div className='icon-fix'></div>
      </div>
    </div>
    <h6 className='text-center text-success'>You added successfully</h6>
  </div>
)

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 1000,
  offset: '30px',
  transition: transitions.SCALE
}

export const Root = ({ store }) => (
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          {store.getState().products.map(item => {
            return (
              <Route
                path={`/${item.title}`}
                key={`product-detail-router-${item.id}`}
              >
                <ProductDetail key={`product-detail-${item.id}`} {...item} />
              </Route>
            )
          })}
        </Switch>
      </Router>
    </Provider>
  </AlertProvider>
)
