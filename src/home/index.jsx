import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Product = ({title,price,description,image})=>{
  return(
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 product-item">
      <Card>
        <CardImg top width="100%" src={image}/>
        <CardBody>
          <CardTitle className="product-title">{title}</CardTitle>
          <CardSubtitle className="product-price">{numberWithCommas(price)} VND</CardSubtitle>
          <CardText className="product-des">{description}</CardText>
          <Button>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  )
}
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            {this.props.data.map(data=>{
              return <Product key={`product-${data.id}`} {...data}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
