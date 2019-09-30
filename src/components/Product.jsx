import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { numberWithCommas } from "../functions/index"

export const Product = ({ id, title, price, description, image, addToCart }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 product-item">
      <Card>
        <CardImg top width="100%" src={image} />
        <CardBody>
          <CardTitle className="product-title">{title}</CardTitle>
          <CardSubtitle className="product-price">{numberWithCommas(price)} VND</CardSubtitle>
          <CardText className="product-des">{description}</CardText>
          <Button onClick={() => addToCart(id, title, price, description, image)}>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  )
}