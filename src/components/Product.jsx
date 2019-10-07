import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import { numberWithCommas } from '../functions/index'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export default function Product({
  id,
  title,
  image,
  price,
  description,
  className,
  addProductToCart
}) {
  const alert = useAlert()
  function addProductToCartAndAlert() {
    alert.success('You added sucessfully')
    addProductToCart()
  }
  return (
    <div
      className={`${
        className ? className : 'col-lg-3 col-md-4 col-sm-6 col-12'
      } product-item-wrapper`}
    >
      <Link to={`/${title}`}>
        <div className='product-item'>
          <Card className='border-0'>
            <CardImg top width='100%' className='product-image' src={image} />
            <CardBody>
              <CardTitle className='product-title'>{title}</CardTitle>
              <CardSubtitle className='product-price'>
                {numberWithCommas(price)} VND
              </CardSubtitle>
              <CardText className='product-des'>{description}</CardText>
            </CardBody>
          </Card>
        </div>
      </Link>
      <button
        className='btn-add-cart position-absolute'
        onClick={addProductToCartAndAlert}
      >
        Add To Cart
      </button>
    </div>
  )
}
