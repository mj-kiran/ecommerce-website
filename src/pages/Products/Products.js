import React from 'react'
import './Products.css'
import { Card, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Products = ({ item }) => {
  // console.log(item.id,"id");
  return (
    <>
      {/* <Link to={`product/${item.id}`}> */}
        <Card className="products_card my-3 p-3 rounded">
          <Container className="img_Container">
            <Card.Img className="card_img" variant="top" src={item.image} />
          </Container>
          <Card.Body>
            <Card.Title className="card_title">{item.title}</Card.Title>
            <br />
            <Card.Text>Category: {item.category}</Card.Text>
            <br />
            <Card.Text className="card_price">Price : $ {item.price}</Card.Text>
          </Card.Body>
        </Card>
      {/* </Link> */}
    </>
  );
}

export default Products