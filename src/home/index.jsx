import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { numberWithCommas} from "../functions/index"
const Product = ({id,title,price,description,image,addToCart})=>{
  return(
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 product-item">
      <Card>
        <CardImg top width="100%" src={image}/>
        <CardBody>
          <CardTitle className="product-title">{title}</CardTitle>
          <CardSubtitle className="product-price">{numberWithCommas(price)} VND</CardSubtitle>
          <CardText className="product-des">{description}</CardText>
          <Button onClick={()=> addToCart(id,title,price,description,image)}>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  )
}
export default class Home extends Component {
  addToCart = (id, title, price, description, image) => {
    const item = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      quantity: 1
    }
    this.props.pushDataToApp(item);
  }
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            {this.props.data.map(data=>{
              return <Product addToCart={this.addToCart} key={`product-${data.id}`} {...data}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
