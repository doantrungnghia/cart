import React, { Component } from 'react'
import { Product } from '../components/Product'
import ModalAdeded from '../components/ModalAdded'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false
    }
  }

  openModal = () => {
    this.setState(prevState => ({
      modalStatus: !prevState.modalStatus
    }))
    setTimeout(() => {
      this.setState(prevState => ({
        modalStatus: !prevState.modalStatus
      }))
    }, 800)
  }

  addToCart = (id, title, price, description, image) => {
    const item = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      quantity: 1
    }
    this.openModal()
    this.props.addProductToCart(item)
  }

  render() {
    const { modalStatus } = this.state
    return (
      <div className='home'>
        <ModalAdeded modalStatus={modalStatus} />
        <div className='container'>
          <div className='row'>
            {this.props.data.map(data => {
              return (
                <Product
                  addToCart={this.addToCart}
                  key={`product-${data.id}`}
                  {...data}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
