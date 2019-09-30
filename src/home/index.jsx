import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {productData} from "../data/index"
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
  constructor(props){
    super(props)
    this.state=({
      data: null
    })
  }
  componentDidMount(){
    this.setState({
      data: productData
    })
  }
  render() {
    const {data} = this.state
    if(!data) return null;
    console.log(data)
    return (
      <div class="home">
        <div className="container">
          <div className="row">
            {data.map(data=>{
              return <Product {...data}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
